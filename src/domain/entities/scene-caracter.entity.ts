import { BaseEntity } from "@/application/entities/base-entity";
import { ICharacter } from "./caracter.entity";
import { IStory } from "./story.entity";
import { IUserInteraction } from "./user-interaction.entity";

export enum CharacterEmotionEnum {
  HAPPY = "happy",
  SAD = "sad",
  SURPRISED = "surprised",
  THINKING = "thinking",
  CONFUSED = "confused",
  VERY_HAPPY = "very-happy",
  NEUTRAL = "neutral",
  FRUSTRATED = "frustrated",
  EXCITED = "excited",
}

export interface ISceneCharacter extends BaseEntity {
  characterId: ICharacter["id"];
  storyId: IStory["id"];
  order: number;
  speech: string;
  emotion: CharacterEmotionEnum;
  avatarUrl: string; // no implement

  interaction?: IUserInteraction;
  character?: ICharacter;
  story?: IStory;
}
