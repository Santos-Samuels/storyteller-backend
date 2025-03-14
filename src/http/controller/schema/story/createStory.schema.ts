import zod from "zod";

export const validateCreateStoryBody = async (data: unknown) => {
  return zod
    .object({
      id: zod.string({
        required_error: "id is required",
        invalid_type_error: "id must be a string",
      }),
      theme: zod.string({
        required_error: "theme is required",
        invalid_type_error: "theme must be a string",
      }),
      title: zod.string({
        required_error: "title is required",
        invalid_type_error: "title must be a string",
      }),
      intro: zod.string({
        required_error: "intro is required",
        invalid_type_error: "intro must be a string",
      }),
      summary: zod.string({
        required_error: "summary is required",
        invalid_type_error: "summary must be a string",
      }),
      backgroundUrl: zod.string({
        required_error: "backgroundUrl is required",
        invalid_type_error: "backgroundUrl must be a string",
      }),

      characters: characterScheme,
      sceneCharacters: sceneCharacterScheme,
    })
    .parseAsync(data)
    .catch((error) => {
      throw new Error(error.errors[0].message);
    });
};

const characterScheme = zod
  .array(
    zod.object({
      id: zod.string({
        required_error: "id is required in character",
        invalid_type_error: "id must be a string in character",
      }),
      name: zod.string({
        required_error: "name is required in character",
        invalid_type_error: "name must be a string in character",
      }),
      role: zod.string({
        required_error: "role is required in character",
        invalid_type_error: "role must be a string in character",
      }),
      position: zod.string({
        required_error: "position is required in character",
        invalid_type_error: "position must be a string in character",
      }),
      avatarUrl: zod.string({
        required_error: "avatarUrl is required in character",
        invalid_type_error: "avatarUrl must be a string in character",
      }),
    })
  )
  .nonempty("Characters array must have at least one character");

const interactionOptionScheme = zod
  .array(
    zod.object({
      id: zod.string({
        required_error: "id is required in option",
        invalid_type_error: "id must be a string in option",
      }),
      sceneCharacterId: zod.string({
        required_error: "sceneCharacterId is required in option",
        invalid_type_error: "sceneCharacterId must be a string in option",
      }),
      nextSceneCharacterId: zod.string({
        required_error: "nextSceneCharacterId is required in option",
        invalid_type_error: "nextSceneCharacterId must be a string in option",
      }),
      label: zod.string({
        required_error: "label is required in option",
        invalid_type_error: "label must be a string in option",
      }),
      feedback: zod.string({
        required_error: "feedback is required in option",
        invalid_type_error: "feedback must be a string in option",
      }),
    })
  )
  .nonempty("Options array must have at least one option");

const sceneCharacterScheme = zod
  .array(
    zod.object({
      id: zod.string({
        required_error: "id is required in sceneCharacter",
        invalid_type_error: "id must be a string in sceneCharacter",
      }),
      characterId: zod.string({
        required_error: "characterId is required in sceneCharacter",
        invalid_type_error: "characterId must be a string in sceneCharacter",
      }),
      order: zod.number({
        required_error: "order is required in sceneCharacter",
        invalid_type_error: "order must be a number in sceneCharacter",
      }),
      speech: zod.string({
        required_error: "speech is required in sceneCharacter",
        invalid_type_error: "speech must be a string in sceneCharacter",
      }),
      emotion: zod.string({
        required_error: "emotion is required in sceneCharacter",
        invalid_type_error: "emotion must be a string in sceneCharacter",
      }),
      avatarUrl: zod.string({
        required_error: "avatarUrl is required in sceneCharacter",
        invalid_type_error: "avatarUrl must be a string in sceneCharacter",
      }),
      interaction: zod
        .object({
          id: zod.string({
            required_error: "id is required in interaction",
            invalid_type_error: "id must be a string in interaction",
          }),
          sceneCharacterId: zod.string({
            required_error: "sceneCharacterId is required in interaction",
            invalid_type_error:
              "sceneCharacterId must be a string in interaction",
          }),
          sentence: zod.string({
            required_error: "sentence is required in interaction",
            invalid_type_error: "sentence must be a string in interaction",
          }),
          options: interactionOptionScheme,
        })
        .optional(),
    })
  )
  .nonempty("sceneCharacters array must have at least one sceneCharacter");
