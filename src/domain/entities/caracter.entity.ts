import { BaseEntity } from "@/application/entities/base-entity";

export interface ICaracter extends BaseEntity {
  name: string;
  baseSpriteRef: string;
}