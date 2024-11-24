import { BaseEntity } from "@/application/entities/base-entity";
import { ISceneCharacter } from "./scene-caracter.entity";
import { IUserInteractionOption } from "./user-interaction-option.entity";
import { IUser } from "./user.entity";

export interface IUserInteraction extends BaseEntity {
  userId: IUser["id"];
  sceneCharacteId: ISceneCharacter["id"];
  userInteractionOptionId: IUserInteractionOption["id"];

  situation: string;

  options?: IUserInteractionOption[];
  sceneCharacter?: ISceneCharacter;
  user?: IUser;
}
