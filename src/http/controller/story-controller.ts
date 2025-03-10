import { GenerateStoryUsecase } from "@/application/usecases/story/generate-story.usecase";
import { GPTCharacter, GPTSceneCharacter } from "@/domain/entities/gpt-story";
import { ChatGPTApiClient } from "@/infra/chatGPT/chat-gpt-api-client";
import { StoryRepository } from "@/infra/database/repositories/story-repository";
import { Request, Response } from "express";
import { validateCreateStoryBody } from "./schema/story/createStory.schema";
import { validateGenerateStoryBody } from "./schema/story/generateStory.schema";

const storyRepository = new StoryRepository();
const chatGPTApiClient = new ChatGPTApiClient();
const generateStoryUsecase = new GenerateStoryUsecase(chatGPTApiClient);

export class StoryController {
  private userId = "mockedUserId";

  generateStory = async (req: Request, res: Response) => {
    try {
      const data = await validateGenerateStoryBody(req.body);
      const story = await generateStoryUsecase.execute(data);
      res.status(201).send(story);
    } catch (error: any) {
      return res.status(500).send(error.message);
    }
  };

  // TODO: move to create-story.usecase
  private populateSceneCharacterPosition = (
    sceneCharacters: GPTSceneCharacter[],
    characters: GPTCharacter[]
  ) => {
    return sceneCharacters.map((sceneCharacter) => {
      const character = characters.find(
        (character) => character.id === sceneCharacter.characterId
      );

      if (!character) {
        throw new Error("Character not found");
      }

      return {
        ...sceneCharacter,
        characterPosition: character.position,
      };
    });
  };

  createStory = async (req: Request, res: Response) => {
    const mockedUserId = "mockedUserId";

    try {
      const data = await validateCreateStoryBody(req.body);

      const updatedSceneCharacters = this.populateSceneCharacterPosition(
        data.sceneCharacters,
        data.characters
      );

      const story = await storyRepository.createStory({
        story: {
          ...data,
          sceneCharacters: updatedSceneCharacters,
        },
        userId: mockedUserId,
      });
      return res.send(story).status(201);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  getAllStories = async (_req: Request, res: Response) => {
    try {
      const stories = await storyRepository.getAllStories({
        authorId: this.userId,
      });
      res.status(200).send(stories);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  };

  getStoryById = async (req: Request, res: Response) => {
    try {
      const storyId = req.params.id;
      const story = await storyRepository.getStoryById(storyId);

      if (!story) {
        res.status(404).send("Story not found");
        return;
      }

      res.status(200).send(story);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  };

  deleteStory = async (req: Request, res: Response) => {
    try {
      const storyId = req.params.id;
      const foundStory = await storyRepository.getStoryById(storyId);

      if (!foundStory) {
        res.status(404).send("Story not found");
        return;
      }

      await storyRepository.deleteStory(storyId);
      res.status(204).send();
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  };
}
