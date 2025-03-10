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

  createStory = async (data: CreateStoryDTO): Promise<IStory> => {
    return prisma.$transaction(async (trx) => {
      const story = await trx.story.create({
        data: {
          ...data.story,
          authorId: data.userId,
        },
      });

      const characters = await Promise.all(
        data.story.characters?.map((character) => {
          return trx.character.create({
            data: {
              ...character,
              storyId: story.id,
            },
          });
        })
      );

      const sceneCharacters = await Promise.all(
        data.story.sceneCharacters.map(async (sceneCharacter) => {
          const characterId = characters.find(
            (character) =>
              character.position === sceneCharacter.characterPosition
          )?.id;

          if (!characterId) {
            throw new Error("Character not found");
          }

          const createdSceneCharacter = await trx.sceneCharacter.create({
            data: {
              ...sceneCharacter,
              characterId,
              storyId: story.id,
            },
          });

          const createdInteraction = await trx.userInteraction.create({
            data: {
              ...sceneCharacter.interaction,
              storyId: story.id,
              sceneCharacterId: createdSceneCharacter.id,
            },
          });

          const createdOptions = await Promise.all(
            sceneCharacter.interaction.options.map((option) => {
              return trx.userInteractionOption.create({
                data: { ...option, sceneCharacterId: createdSceneCharacter.id },
              });
            })
          );

          return {
            ...createdSceneCharacter,
            interaction: {
              ...createdInteraction,
              options: createdOptions,
            },
          };
        })
      );

      // populate interection option nextSceneCharacterId
      // sceneCharacters.forEach((sceneCharacter) => {
      //   const interaction = sceneCharacter.interaction;
      //   const options = interaction.options;

      //   options.forEach((option) => {
      //     const nextSceneCharacter = sceneCharacters.find(
      //       (sceneCharacter) =>
      //         sceneCharacter.id === option.nextSceneCharacterId
      //     );

      //     if (!nextSceneCharacter) {
      //       throw new Error("Next scene character not found");
      //     }

      //     option.nextSceneCharacterId = nextSceneCharacter.id;
      //   });
      // });

      return {
        ...story,
        characters,
        sceneCharacters,
      };
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
        character: true,
        sceneCharacter: {
          include: {
            userInteraction: {
              include: {
                userInteractionOption: true,
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
