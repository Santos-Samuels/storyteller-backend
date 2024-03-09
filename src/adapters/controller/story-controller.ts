import { BaseUsecase } from "@/application/entities/base-usecase";
import { CreateStoryDTO } from "@/application/entities/dto/create-story.dto";
import { GPTStory } from "@/application/entities/dto/gpt-story.dto";
import { Request, Response } from "express";
import { validateCreateStoryBody } from "./schema/create.story.schema";

export class StoryController {
  constructor(
    private readonly createStoryUsecase: BaseUsecase<CreateStoryDTO, GPTStory>
  ) {}

  create = async (req: Request, res: Response) => {
    try {
      const { theme } = await validateCreateStoryBody(req.body);
      const story = await this.createStoryUsecase.execute({
        theme: theme,
      });

      return res.send(story).status(201);
    } catch (error: any) {
      return res.status(400).send({ message: error.message });
    }
  };
}
