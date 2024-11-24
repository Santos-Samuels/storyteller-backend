import {
  CreateCharacterDTO,
  ListCharactersDTO,
} from "@/domain/dtos/character.dto";
import { ICharacter } from "@/domain/entities/character.entity";
import { CharacterRepositoryInterface } from "@/domain/repositories/character-repository.interface";
import { PrismaClient } from "@prisma/client";
import prisma from "../prisma/prisma";

export class CharacterRepository implements CharacterRepositoryInterface {
  private characterRepository = prisma.character;

  constructor(private readonly trx?: PrismaClient) {
    if (!this.trx) return;
    this.characterRepository = prisma.character;
  }

  getAllCharacters = async (
    params: ListCharactersDTO
  ): Promise<ICharacter[]> => {
    return this.characterRepository.findMany({
      where: params,
    });
  };

  getCharacterById = async (id: string): Promise<ICharacter | null> => {
    return this.characterRepository.findUnique({
      where: { id },
    }) as unknown as ICharacter;
  };

  createCharacter = async (data: CreateCharacterDTO): Promise<ICharacter> => {
    return this.characterRepository.create({
      data,
    });
  };

  updateCharacter = async (
    id: ICharacter["id"],
    data: CreateCharacterDTO
  ): Promise<ICharacter> => {
    return this.characterRepository.update({
      where: { id },
      data,
    });
  };

  deleteCharacter = async (id: string): Promise<void> => {
    await this.characterRepository.delete({ where: { id } });
  };
}
