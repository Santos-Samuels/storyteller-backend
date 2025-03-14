import { BaseEntity } from "@/application/entities/base-entity";
import { ISceneCharacter } from "./scene-character.entity";
import { IUserInteractionOption } from "./user-interaction-option.entity";

export interface IUserInteraction extends BaseEntity {
  sceneCharacterId: ISceneCharacter["id"];

  sentence: string;

  sceneCharacter?: ISceneCharacter;
  options?: IUserInteractionOption[];
}
