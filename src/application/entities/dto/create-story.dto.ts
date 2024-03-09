import { IStory } from "@/domain/entities/story.entity";

export interface CreateStoryDTO {
  theme: IStory["id"];
}
