import {
  CreateStoryDTO,
  ListStoriesDTO,
  UpdateStoryDTO,
} from "../dtos/story.dto";
import { IStory } from "../entities/story.entity";

export interface StoryRepositoryInterface {
  getAllStories(params: ListStoriesDTO): Promise<IStory[]>;
  getStoryById(id: IStory["id"]): Promise<IStory | null>;
  createStory(data: CreateStoryDTO): Promise<void>;
  updateStory(id: IStory["id"], data: UpdateStoryDTO): Promise<IStory>;
  deleteStory(id: IStory["id"]): Promise<void>;
}
