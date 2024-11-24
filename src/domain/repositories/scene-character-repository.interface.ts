import {
  CreateSceneCharacterDTO,
  ListSceneCharactersDTO,
} from "../dtos/scene-character.dto";
import { ISceneCharacter } from "../entities/scene-character.entity";

export interface SceneCharacterRepositoryInterface {
  getAllSceneCharacters(
    params: ListSceneCharactersDTO
  ): Promise<ISceneCharacter[]>;
  getSceneCharacterById(
    id: ISceneCharacter["id"]
  ): Promise<ISceneCharacter | null>;
  createSceneCharacter(data: CreateSceneCharacterDTO): Promise<ISceneCharacter>;
  updateSceneCharacter(
    id: ISceneCharacter["id"],
    data: CreateSceneCharacterDTO
  ): Promise<ISceneCharacter>;
  deleteSceneCharacter(id: ISceneCharacter["id"]): Promise<void>;
}
