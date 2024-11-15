import { BaseEntity } from "@/application/entities/base-entity";
import { ISceneCharacter } from "./scene-caracter.entity";
import { IUserInteractionOption } from "./user-interaction-option.entity";

export interface IUserInteraction extends BaseEntity {
  sceneCharacteId: ISceneCharacter["id"];

  situation: string;

  options?: IUserInteractionOption[];
}
