import StoryControllerFactory from "@/adapters/factories/story-controller-factory";
import { Router } from "express";

const storyRoute = Router();

// const client = new ChatGPTApiClient();
// const usecase = new CreateStoryUsecase(client);
// const constoller = new StoryController(usecase);

const factory = new StoryControllerFactory();

storyRoute.post("/story", factory.createStory);

export default storyRoute;
