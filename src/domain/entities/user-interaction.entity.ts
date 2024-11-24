import { BaseEntity } from "@/application/entities/base-entity";
import { ISceneCharacter } from "./scene-character.entity";
import { IStory } from "./story.entity";
import { IUserInteractionOption } from "./user-interaction-option.entity";
import { IUser } from "./user.entity";

export interface IUserInteraction extends BaseEntity {
  userId: IUser["id"];
  storyId: IStory["id"];
  sceneCharacterId: ISceneCharacter["id"];
  userInteractionOptionId: IUserInteractionOption["id"];

  situation: string;

  user?: IUser;
  story?: IStory;
  sceneCharacter?: ISceneCharacter;
  userInteractionOption?: IUserInteractionOption;
}
