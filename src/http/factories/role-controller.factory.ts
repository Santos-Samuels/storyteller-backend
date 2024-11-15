import { Role } from "@/infra/database/entities/role";
import { RoleRepository } from "@/infra/database/repositories/role-repository";
import { dataSource } from "@/infra/database/type-orm/typeorm.config";
import { RoleController } from "../controller/role-controller";

const roleRepository = dataSource.getRepository(Role);
console.log("🚀 ~ roleControllerFactory ~ roleRepository:", roleRepository)

export const roleControllerFactory = () => {
  const repository = new RoleRepository();
  const controller = new RoleController();

  return controller;
};
