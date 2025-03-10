import { IGPTStory } from "../entities/gpt-story";

export interface ListStoriesDTO {
  authorId?: string;
}

export interface GenerateStoryDTO {
  theme: string;
  amountScenes: number;
}

export interface CreateStoryDTO {
  story: Omit<IGPTStory, "id">;
  userId: string; // get from token
}

export interface UpdateStoryDTO {
  theme?: string;
  title?: string;
  intro?: string;
  summary?: string;
  backgroundUrl?: string;
}
