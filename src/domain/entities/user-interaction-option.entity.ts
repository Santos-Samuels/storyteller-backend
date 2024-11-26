import { BaseEntity } from "@/application/entities/base-entity";
import { ISceneCharacter } from "./scene-caracter.entity";
import { IUserInteraction } from "./user-interaction.entity";

export interface IUserInteractionOption extends BaseEntity {
  userInteractionId: IUserInteraction["id"];
  nextSceneCharacteId: ISceneCharacter["id"];

  label: string;
  feedback: string;
}
