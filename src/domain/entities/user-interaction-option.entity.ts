import { BaseEntity } from "@/application/entities/base-entity";
import { ISceneCharacter } from "./scene-character.entity";

export interface IUserInteractionOption extends BaseEntity {
  sceneCharacterId: ISceneCharacter["id"];
  nextSceneCharacterId: ISceneCharacter["id"];

  label: string;
  feedback: string;

  sceneCharacter?: ISceneCharacter;
}
