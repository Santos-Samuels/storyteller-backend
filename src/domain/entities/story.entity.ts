import { BaseEntity } from "@/application/entities/base-entity";
import { ICharacter } from "./caracter.entity";
import { ISceneCharacter } from "./scene-caracter.entity";
import { IUser } from "./user.entity";

export interface IStory extends BaseEntity {
  theme: string;
  title: string;
  intro: string;
  summary: string;
  backgroundUrl: string; // no implement
  authorId: IUser["id"];

  characters?: ICharacter[];
  sceneCaracters?: ISceneCharacter[];
}
