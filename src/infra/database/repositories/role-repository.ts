import { IRole } from "@/domain/entities/role.entity";
import { RoleRepositoryInterface } from "@/domain/repositories/role-repository.interface";
import prisma from "../prisma/prisma";

export class RoleRepository implements RoleRepositoryInterface {
  private roleRepository = prisma.role;

  getAllRoles = async () => {
    return this.roleRepository.findMany();
  };

  getRoleById = async (id: string): Promise<IRole | null> => {
    return this.roleRepository.findUnique({ where: { id } });
  };
}
