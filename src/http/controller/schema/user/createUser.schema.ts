import { CreateUserDTO } from "@/domain/dtos/user.dto";
import zod from "zod";

export const validateCreateUserBody = async (
  data: unknown
): Promise<CreateUserDTO> => {
  return zod
    .object({
      name: zod.string({
        required_error: "name is required",
        invalid_type_error: "name must be a string",
      }),
      email: zod.string({
        required_error: "email is required",
        invalid_type_error: "email must be a string",
      }),
      password: zod.string({
        required_error: "password is required",
        invalid_type_error: "password must be a string",
      }),
      roleId: zod.string({
        required_error: "roleId is required",
        invalid_type_error: "roleId must be a string",
      }),
    })
    .parseAsync(data)
    .catch((error) => {
      throw new Error(error.errors[0].message);
    });
};
