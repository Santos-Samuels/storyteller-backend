import StoryControllerFactory from "@/http/factories/story-controller-factory";
import { Router } from "express";

const storyRoute = Router();

const factory = new StoryControllerFactory();

storyRoute.post("/", factory.createStory);

export default storyRoute;
