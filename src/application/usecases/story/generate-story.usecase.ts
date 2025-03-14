import { BaseUsecase } from "@/application/entities/base-usecase";
import { expectedStoryOutputFormatPrompt } from "@/application/prompts/story-output.prompt";
import { requeredStoryStandardPrompt } from "@/application/prompts/story-standard.prompt";
import { GenerateStoryDTO } from "@/domain/dtos/story.dto";
import { IStory } from "@/domain/entities/story.entity";
import { ChatGPTApiClient } from "@/infra/chatGPT/chat-gpt-api-client";
import { ChatCompletionCreateParams } from "openai/resources";
import { v4 as uuidv4 } from "uuid";

export class GenerateStoryUsecase
  implements BaseUsecase<GenerateStoryDTO, IStory>
{
  private amountCharacter = 2;
  // private OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-3.5-turbo";
  private OPENAI_MODEL = "gpt-4o";

  constructor(private readonly chatGPTApiClient: ChatGPTApiClient) {}

  execute = async (params: GenerateStoryDTO) => {
    const initialConversation = this.getInitialConversation(params);

    const openAI = this.chatGPTApiClient.getClient();
    const response = await openAI.chat.completions.create({
      messages: initialConversation,
      model: this.OPENAI_MODEL,
      response_format: { type: "json_object" },
    });

    if (!response.choices[0].message.content) {
      throw new Error("Erro ao criar a história");
    }

    const createdStory = JSON.parse(
      response.choices[0].message.content
    ) as IStory;
    return this.replaceIdsWithUUIDs(createdStory);
  };

  private getInitialConversation = ({
    theme,
    amountScenes,
  }: GenerateStoryDTO): ChatCompletionCreateParams["messages"] => {
    return [
      {
        role: "assistant",
        content: `Regras obrigatórias para a criação da história:
        ${requeredStoryStandardPrompt(amountScenes)}`,
      },
      {
        role: "system",
        content: `O formato de saída da história deve ser em JSON.
        ${expectedStoryOutputFormatPrompt}`,
      },
      {
        role: "user",
        content: `Crie uma história interativa sobre o tema ${theme}, na qual acontece um diálogo entre ${this.amountCharacter} personagens.`,
      },
    ];
  };

  private replaceIdsWithUUIDs = (story: IStory) => {
    const idMap = new Map();
    const storyCopy = { ...story };

    storyCopy.id = uuidv4();

    // mapping ids to uuids
    storyCopy.characters?.forEach((character) => {
      idMap.set(character.id, uuidv4());
    });

    storyCopy.sceneCharacters?.forEach((sceneChar) => {
      idMap.set(sceneChar.id, uuidv4());
    });

    // replace ids with uuids
    storyCopy.characters = storyCopy.characters?.map((character) => ({
      ...character,
      position: character.position.toLocaleUpperCase(),
      gender: character.gender.toLocaleUpperCase(),
      id: idMap.get(character.id),
      storyId: storyCopy.id,
    }));

    storyCopy.sceneCharacters = storyCopy.sceneCharacters?.map((sceneChar) => {
      const updatedSceneChar = {
        ...sceneChar,
        id: idMap.get(sceneChar.id),
        characterId: idMap.get(sceneChar.characterId),
        storyId: storyCopy.id,
      };

      if (updatedSceneChar.interaction) {
        updatedSceneChar.interaction.id = uuidv4();
        updatedSceneChar.interaction.sceneCharacterId = idMap.get(
          updatedSceneChar.interaction.sceneCharacterId
        );

        updatedSceneChar.interaction.options =
          updatedSceneChar.interaction.options?.map((option) => ({
            ...option,
            id: uuidv4(),
            sceneCharacterId: idMap.get(option.sceneCharacterId),
            nextSceneCharacterId: idMap.get(option.nextSceneCharacterId),
          }));
      }

      return updatedSceneChar;
    });

    return storyCopy;
  };
}
