import { StoryController } from "@/http/controller/story-controller";
import { Router } from "express";

const storyRoute = Router();
const controller = new StoryController();

storyRoute.get("/story", controller.getAllStories);
storyRoute.get("/story/:id", controller.getStoryById);
storyRoute.post("/story", controller.createStory);
storyRoute.post("/story/generate", controller.generateStory);
storyRoute.delete("/story/:id", controller.deleteStory);

export default storyRoute;
