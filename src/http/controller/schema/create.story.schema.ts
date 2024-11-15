import zod from "zod";

export const validateCreateStoryBody = (data: unknown) => {
  return zod
    .object({
      theme: zod.string({
        required_error: "Theme is required",
        invalid_type_error: "Theme must be a string",
      }),
    })
    .parseAsync(data)
    .catch((error) => {
      throw new Error(error.errors[0].message);
    });
};
