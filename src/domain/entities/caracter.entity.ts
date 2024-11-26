import { BaseEntity } from "@/application/entities/base-entity";
import { IStory } from "./story.entity";

enum CharacterPositionEnum {
  LEFT = "left",
  RIGHT = "right",
  CENTER = "center",
}

export interface ICharacter extends BaseEntity {
  storyId: IStory["id"];

  name: string;
  role: string;
  position: CharacterPositionEnum;
  avatarUrl: string; // no implement
}
