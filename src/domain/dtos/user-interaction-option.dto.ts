import { ISceneCharacter } from "../entities/scene-character.entity";

export interface ListUserInteractionOptionsDTO {
  sceneCharacterId?: ISceneCharacter["id"];
}

export interface CreateUserInteractionOptionDTO {
  sceneCharacterId: ISceneCharacter["id"];
  nextSceneCharacterId: ISceneCharacter["id"];
  label: string;
  feedback: string;
}

export interface UpdateUserInteractionOptionDTO {
  label: string;
  feedback: string;
}
