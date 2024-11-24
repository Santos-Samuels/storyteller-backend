import { CreateCharacterDTO, ListCharactersDTO } from "../dtos/character.dto";
import { ICharacter } from "../entities/character.entity";

export interface CharacterRepositoryInterface {
  getAllCharacters(params: ListCharactersDTO): Promise<ICharacter[]>;
  getCharacterById(id: ICharacter["id"]): Promise<ICharacter | null>;
  createCharacter(data: CreateCharacterDTO): Promise<ICharacter>;
  updateCharacter(
    id: ICharacter["id"],
    data: CreateCharacterDTO
  ): Promise<ICharacter>;
  deleteCharacter(id: ICharacter["id"]): Promise<void>;
}
