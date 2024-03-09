import StoryControllerFactory from "@/adapters/factories/story-controller-factory";
import { Router } from "express";

const storyRoute = Router();

const factory = new StoryControllerFactory();

storyRoute.post("/story", factory.createStory);

export default storyRoute;
