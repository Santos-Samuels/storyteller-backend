import { IStory } from "../entities/story.entity";

export interface ListCharactersDTO {
  storyId?: IStory["id"];
}

export interface CreateCharacterDTO {
  storyId: IStory["id"];
  name: string;
  role: string;
  position: string;
  avatarUrl: string;
  gender: string;
}

export interface UpdateCharacterDTO {
  name: string;
  role: string;
  avatarUrl: string;
}
