import {
  CreateSceneCharacterDTO,
  ListSceneCharactersDTO,
} from "@/domain/dtos/scene-character.dto";
import { ISceneCharacter } from "@/domain/entities/scene-character.entity";
import { SceneCharacterRepositoryInterface } from "@/domain/repositories/scene-character-repository.interface";
import { PrismaClient } from "@prisma/client";
import prisma from "../prisma/prisma";

export class SceneCharacterRepository
  implements SceneCharacterRepositoryInterface
{
  private sceneCharacterRepository = prisma.sceneCharacter;

  constructor(private readonly trx?: PrismaClient) {
    if (!this.trx) return;
    this.sceneCharacterRepository = prisma.sceneCharacter;
  }

  getAllSceneCharacters = async (
    params: ListSceneCharactersDTO
  ): Promise<ISceneCharacter[]> => {
    return this.sceneCharacterRepository.findMany({
      where: params,
    });
  };

  getSceneCharacterById = async (
    id: string
  ): Promise<ISceneCharacter | null> => {
    return this.sceneCharacterRepository.findUnique({
      where: { id },
    }) as unknown as ISceneCharacter;
  };

  createSceneCharacter = async (
    data: CreateSceneCharacterDTO
  ): Promise<ISceneCharacter> => {
    return this.sceneCharacterRepository.create({
      data,
    });
  };

  updateSceneCharacter = async (
    id: ISceneCharacter["id"],
    data: CreateSceneCharacterDTO
  ): Promise<ISceneCharacter> => {
    return this.sceneCharacterRepository.update({
      where: { id },
      data,
    });
  };

  deleteSceneCharacter = async (id: string): Promise<void> => {
    await this.sceneCharacterRepository.delete({ where: { id } });
  };
}
