import { ICharacter } from "../entities/character.entity";
import { IStory } from "../entities/story.entity";

export interface ListSceneCharactersDTO {
  characterId?: ICharacter["id"];
  storyId?: IStory["id"];
}

export interface CreateSceneCharacterDTO {
  characterId: ICharacter["id"];
  storyId: IStory["id"];
  order: number;
  speech: string;
  emotion: string;
  avatarUrl: string;
}

export interface UpdateSceneCharacterDTO {
  speech: string;
  emotion: string;
  avatarUrl: string;
}
