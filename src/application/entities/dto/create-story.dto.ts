import { IGPTStory } from "@/domain/entities/gpt-story";
import { IStory } from "@/domain/entities/story.entity";

export interface CreateStoryDTO {
  theme: IStory["id"];
}

export interface CreateStoryResponse {
  mainStory: IGPTStory;
  ramificationsStories: IGPTStory[];
}