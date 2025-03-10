import zod from "zod";

export const validateGenerateStoryBody = async (data: unknown) => {
  return zod
    .object({
      theme: zod.string({
        required_error: "theme is required",
        invalid_type_error: "theme must be a string",
      }),
      amountScenes: zod.number({
        required_error: "amountScenes is required",
        invalid_type_error: "amountScenes must be a number",
      }),
    })
    .parseAsync(data)
    .catch((error) => {
      throw new Error(error.errors[0].message);
    });
};
