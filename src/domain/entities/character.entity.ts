import { BaseEntity } from "@/application/entities/base-entity";
import { IStory } from "./story.entity";

enum CharacterPositionEnum {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  CENTER = "CENTER",
}

export interface ICharacter extends BaseEntity {
  storyId: IStory["id"];

  name: string;
  role: string;
  position: CharacterPositionEnum | string;
  avatarUrl: string; // no implement

  story?: IStory;
}
