import { BaseEntity } from "@/application/entities/base-entity";
import { ISceneCharacter } from "./scene-character.entity";
import { IStory } from "./story.entity";
import { IUserInteractionOption } from "./user-interaction-option.entity";
import { IUser } from "./user.entity";

export interface IUserInteraction extends BaseEntity {
  storyId: IStory["id"];
  sceneCharacterId: ISceneCharacter["id"];

  sentence: string;

  user?: IUser;
  story?: IStory;
  sceneCharacter?: ISceneCharacter;
  userInteractionOption?: IUserInteractionOption;
}
