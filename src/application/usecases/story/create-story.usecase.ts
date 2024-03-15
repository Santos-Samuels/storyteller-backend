import { BaseUsecase } from "@/application/entities/base-usecase";
import {
  CreateStoryDTO,
  CreateStoryResponse,
} from "@/application/entities/dto/create-story.dto";
import { storyOutputFormatPrompt } from "@/application/prompts/story-output-format.prompt";
import { IGPTStory } from "@/domain/entities/gpt-story";
import { ChatGPTApiClient } from "@/infra/chatGPT/chat-gpt-api-client";
import { ChatCompletionCreateParams } from "openai/resources";
import { CreateStoryRamificationUsecase } from "./create-story-ramification";

export class CreateStoryUsecase
  implements BaseUsecase<CreateStoryDTO, CreateStoryResponse>
{
  private amountOfScenes = 20;

  constructor(
    private readonly chatGPTApiClient: ChatGPTApiClient,
    private readonly OPENAI_MODEL: string,
    private readonly createStoryRamificationUsecase: CreateStoryRamificationUsecase
  ) {}

  execute = async (params: CreateStoryDTO) => {
    const initialConversation = this.getInitialConversation(params);

    const openAI = this.chatGPTApiClient.getClient();
    const response = await openAI.chat.completions.create({
      messages: initialConversation,
      model: this.OPENAI_MODEL,
      response_format: { type: "json_object" },
    });

    if (!response.choices[0].message.content) {
      throw new Error("Erro ao criar história");
    }

    //generedParsedStory
    const mainStory = JSON.parse(
      response.choices[0].message.content
    ) as IGPTStory;

    const conversationHistory: ChatCompletionCreateParams["messages"] = [
      ...initialConversation,
      {
        role: "assistant",
        content: response.choices[0].message.content,
      },
    ];

    const mainStoryWithRamificationTheme =
      this.addRamificationThemeOnMainStory(mainStory);
    const ramificationsStories = await this.getRamificationsStories(
      mainStoryWithRamificationTheme,
      conversationHistory
    );

    return { mainStory, ramificationsStories };
  };

  private getInitialConversation = ({
    theme,
  }: CreateStoryDTO): ChatCompletionCreateParams["messages"] => {
    return [
      {
        role: "assistant",
        content: `Regras obrigatórias para a criação da história:
        - O diálogo deve ser livre, com ambos podendo fazer perguntas ou afirmativas sobre o tema.
        - Deve haver no mínimo ${this.amountOfScenes} cenas.
        - "isRamification" deve ser false.
        - Devem ser adicionar 4 pilares desse tema em "ramifications".
        - O resumo da história será em "summary".
        - O retorno será no formato .json.
        - O JSON deve incluir todas as cenas.`,
      },
      {
        role: "system",
        content: `Eu irei criar 20 cenas seguindo exatamente o modelo abaixo:
        ${storyOutputFormatPrompt}`,
      },
      {
        role: "user",
        content: `Crie uma história na qual acontece um dialógo entre dois personagens sobre o tema ${theme}`,
      },
    ];
  };

  private getRamificationsStories = async (
    mainStory: IGPTStory,
    conversationHistory: ChatCompletionCreateParams["messages"]
  ) => {
    const ramificationsStories: IGPTStory[] = [];
    let updatedConversationHistory = conversationHistory;

    await Promise.all(
      mainStory.ramifications?.map(async (ramification) => {
        const ramificationStoryResponse =
          await this.createStoryRamificationUsecase.execute({
            ramificationTheme: ramification,
            conversationHistory: updatedConversationHistory,
          });

        ramificationsStories.push(ramificationStoryResponse.ramificationStory);
        updatedConversationHistory =
          ramificationStoryResponse.updatedConversationHistory;
      }) || []
    );

    return ramificationsStories;
  };

  private addRamificationThemeOnMainStory = (mainSory: IGPTStory) => {
    if (!mainSory.ramifications?.length) {
      return mainSory;
    }

    const randomIndexes = this.getRandomIndexes(
      mainSory.scenes.length,
      mainSory.ramifications?.length
    );

    randomIndexes.forEach((index, i) => {
      mainSory.scenes[index].ramificationTheme = mainSory.ramifications?.[i];
    });

    return mainSory;
  };

  private getRandomIndexes(range: number, amountIndexes: number) {
    const indexes = new Set<number>();

    while (indexes.size < amountIndexes) {
      const randomIndex = Math.floor(Math.random() * range);
      indexes.add(randomIndex);
    }

    return Array.from(indexes);
  }
}
