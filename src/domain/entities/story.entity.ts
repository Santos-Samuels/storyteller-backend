import { BaseEntity } from "@/application/entities/base-entity";
import { ICharacter } from "./character.entity";
import { ISceneCharacter } from "./scene-character.entity";
import { IUser } from "./user.entity";

export interface IStory extends BaseEntity {
  theme: string;
  title: string;
  intro: string;
  summary: string;
  backgroundUrl: string; // no implement
  authorId: IUser["id"];

  characters?: ICharacter[];
  sceneCharacters?: ISceneCharacter[];
}
