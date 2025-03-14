import {
  CreateStoryDTO,
  ListStoriesDTO,
  UpdateStoryDTO,
} from "@/domain/dtos/story.dto";
import { IStory } from "@/domain/entities/story.entity";
import { StoryRepositoryInterface } from "@/domain/repositories/story-repository.interface";
import prisma from "../prisma/prisma";

export class StoryRepository implements StoryRepositoryInterface {
  private storyRepository = prisma.story;

  createStory = async (data: CreateStoryDTO): Promise<void> => {
    return prisma.$transaction(async (trx) => {
      const story = await trx.story.create({
        data: {
          id: data.story.id,
          title: data.story.title,
          intro: data.story.intro,
          summary: data.story.summary,
          backgroundUrl: data.story.backgroundUrl,
          theme: data.story.theme,
          authorId: data.userId,
          characters: {
            createMany: {
              data: data.story.characters.map((character) => ({
                id: character.id,
                name: character.name,
                role: character.role,
                position: character.position,
                avatarUrl: character.avatarUrl,
                gender: character.gender,
              })),
            },
          },
          sceneCharacters: {
            createMany: {
              data: data.story.sceneCharacters.map((sceneCharacter) => ({
                id: sceneCharacter.id,
                characterId: sceneCharacter.characterId,
                order: sceneCharacter.order,
                speech: sceneCharacter.speech,
                emotion: sceneCharacter.emotion,
                avatarUrl: sceneCharacter.avatarUrl,
              })),
            },
          },
        },
      });

      await Promise.all(
        data.story.sceneCharacters.map(async (sceneCharacter) => {
          if (!sceneCharacter.interaction) return;

          const createdInteraction = await trx.userInteraction.create({
            data: {
              id: sceneCharacter.interaction.id,
              sentence: sceneCharacter.interaction.sentence,
              sceneCharacterId: sceneCharacter.interaction.sceneCharacterId,
              storyId: story.id,
            },
          });

          await trx.userInteractionOption.createMany({
            data: sceneCharacter.interaction.options.map((option) => ({
              id: option.id,
              sceneCharacterId: option.sceneCharacterId,
              nextSceneCharacterId: option.nextSceneCharacterId,
              label: option.label,
              feedback: option.feedback,
              interactionId: createdInteraction.id,
            })),
          });
        })
      );
    });
  };

  getAllStories = async (params: ListStoriesDTO): Promise<IStory[]> => {
    return this.storyRepository.findMany({
      where: params,
    });
  };

  getStoryById = async (id: IStory["id"]): Promise<IStory | null> => {
    return this.storyRepository.findUnique({
      where: {
        id,
      },
      include: {
        author: true,
        characters: true,
        sceneCharacters: {
          include: {
            interaction: {
              include: {
                options: true,
              },
            },
          },
        },
      },
    });
  };

  updateStory = async (
    id: IStory["id"],
    data: UpdateStoryDTO
  ): Promise<IStory> => {
    return this.storyRepository.update({
      where: {
        id,
      },
      data,
    });
  };

  deleteStory = async (id: IStory["id"]): Promise<void> => {
    await this.storyRepository.delete({
      where: {
        id,
      },
    });
  };
}
