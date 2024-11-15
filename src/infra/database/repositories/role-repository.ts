import { RoleRepositoryInterface } from "@/domain/repositories/role-repository.interface";
import { Role } from "../entities/role";
import { dataSource } from "../type-orm/typeorm.config";

// console.log("🚀 ~ repository:", this.roleRepository);

export class RoleRepository implements RoleRepositoryInterface {
  private roleRepository = dataSource.getRepository(Role);

  getAllRoles = async () => {
    return this.roleRepository.find();
  };

  getRoleById = async (id: string): Promise<Role | undefined> => {
    const role = await this.roleRepository.findOne({ where: { id } });
    return role ?? undefined;
  };

  createRole = async (role: Role) => {
    return this.roleRepository.save(role);
  };

  updateRole = async (id: string, role: Role) => {
    await this.roleRepository.update(id, role);
    return role;
  };

  deleteRole = async (id: string) => {
    await this.roleRepository.delete(id);
  };
}
