import { BaseEntity } from "@/application/entities/base-entity";
import { Role } from "./role.entity";

export interface User extends BaseEntity {
  name: string;
  email: string;
  password: string;
  roleId: Role["id"];

  role?: Role;
}
