import { UpdateUserDTO } from "@/domain/dtos/user.dto";
import zod from "zod";

export const validateUpdateUserBody = async (
  data: unknown
): Promise<UpdateUserDTO> => {
  return zod
    .object({
      name: zod.string({
        required_error: "name is required",
        invalid_type_error: "name must be a string",
      }),
    })
    .parseAsync(data)
    .catch((error) => {
      throw new Error(error.errors[0].message);
    });
};
