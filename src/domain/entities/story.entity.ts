import { BaseEntity } from "@/application/entities/base-entity";
import { User } from "./user.entity";

export interface IStory extends BaseEntity {
  userId: User["id"];
  theme: string;
  summary: string;
  ramifications?: string[];
  isRamification?: boolean;

  user?: User;
}