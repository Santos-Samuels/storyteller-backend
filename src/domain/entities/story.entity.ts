import { BaseEntity } from "@/application/entities/base-entity";
import { ICharacter } from "./caracter.entity";
import { ISceneCharacter } from "./scene-caracter.entity";

export interface IStory extends BaseEntity {
  theme: string;
  title: string;
  intro: string;
  summary: string;
  backgroundUrl: string; // no implement

  characters?: ICharacter[];
  sceneCaracters?: ISceneCharacter[];
}
