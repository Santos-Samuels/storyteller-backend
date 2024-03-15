import { BaseUsecase } from "@/application/entities/base-usecase";
import {
  CreateStoryDTO,
  CreateStoryResponse,
} from "@/application/entities/dto/create-story.dto";
import { Request, Response } from "express";
import { validateCreateStoryBody } from "./schema/create.story.schema";

export class StoryController {
  constructor(
    private readonly createStoryUsecase: BaseUsecase<
      CreateStoryDTO,
      CreateStoryResponse
    >
  ) {}

  create = async (req: Request, res: Response) => {
    try {
      const { theme } = await validateCreateStoryBody(req.body);
      const story = await this.createStoryUsecase.execute({
        theme,
      });

      return res.send(story).status(201);
    } catch (error: any) {
      return res.status(400).send({ message: error.message });
    }
  };
}
