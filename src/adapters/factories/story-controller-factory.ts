import { CreateStoryRamificationUsecase } from "@/application/usecases/story/create-story-ramification";
import { CreateStoryUsecase } from "@/application/usecases/story/create-story.usecase";
import { ChatGPTApiClient } from "@/infra/chatGPT/chat-gpt-api-client";
import { StoryController } from "../controller/story-controller";

export default class StoryControllerFactory {
  private readonly OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-3.5-turbo";
  private readonly client: ChatGPTApiClient = new ChatGPTApiClient();

  private readonly createStoryRamificationUsecase: CreateStoryRamificationUsecase =
    new CreateStoryRamificationUsecase(this.client, this.OPENAI_MODEL);

  private readonly createStoryUsecase: CreateStoryUsecase =
    new CreateStoryUsecase(
      this.client,
      this.OPENAI_MODEL,
      this.createStoryRamificationUsecase
    );

  private readonly controller: StoryController = new StoryController(
    this.createStoryUsecase
  );

  public createStory = this.controller.create;
}
