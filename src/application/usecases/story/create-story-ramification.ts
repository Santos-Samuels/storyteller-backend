import { BaseUsecase } from "@/application/entities/base-usecase";
import {
  CreateStoryRamificationDTO,
  CreateStoryRamificationResponse,
} from "@/application/entities/dto/create-story-ramification.dto";
import { storyOutputFormatPrompt } from "@/application/prompts/story-output-format.prompt";
import { IGPTStory } from "@/domain/entities/gpt-story";
import { ChatGPTApiClient } from "@/infra/chatGPT/chat-gpt-api-client";
import { ChatCompletionCreateParams } from "openai/resources";

export class CreateStoryRamificationUsecase
  implements
    BaseUsecase<CreateStoryRamificationDTO, CreateStoryRamificationResponse>
{
  private amountOfScenes = 15;

  constructor(
    private readonly chatGPTApiClient: ChatGPTApiClient,
    private readonly OPENAI_MODEL: string
  ) {}

  execute = async (params: CreateStoryRamificationDTO) => {
    const currentConversation = this.getCurrentConversation(params);

    const openAI = this.chatGPTApiClient.getClient();
    const response = await openAI.chat.completions.create({
      messages: currentConversation,
      model: this.OPENAI_MODEL,
      response_format: { type: "json_object" },
    });

    if (!response.choices[0].message.content) {
      throw new Error("Erro ao criar a ramificação da história");
    }

    const updatedConversationHistory: ChatCompletionCreateParams["messages"] = [
      ...currentConversation,
      {
        role: "assistant",
        content: response.choices[0].message.content,
      },
    ];

    const data: CreateStoryRamificationResponse = {
      ramificationStory: JSON.parse(
        response.choices[0].message.content
      ) as IGPTStory,
      updatedConversationHistory,
    };

    return data;
  };

  private getCurrentConversation = ({
    conversationHistory,
    ramificationTheme,
  }: CreateStoryRamificationDTO): ChatCompletionCreateParams["messages"] => {
    return [
      ...conversationHistory,
      {
        role: "assistant",
        content: `Regras obrigatórias para a criação da ramificação da história:
          - O diálogo deve ser livre, com ambos podendo fazer perguntas ou afirmativas sobre o tema.
          - Não deve trazer pilares, por isso "ramifications" deve ser undefined.
          - O resumo da história será em "summary".
          - O retorno será no formato .json.
          - O JSON deve incluir todas as cenas.
          - Deve haver ${this.amountOfScenes} cenas no mínimo.
          - Essa ramificação deve ser uma continuação da história principal.
          - "isRamification" deve ser true.
          - A primeira cena deve ser uma transição da história principal para a ramificação.
          - A última cena deve ser uma transição da ramificação para a história principal.`,
      },
      {
        role: "system",
        content: `Eu irei criar ${this.amountOfScenes} cenas seguindo exatamente o modelo abaixo:
          ${storyOutputFormatPrompt}`,
      },
      {
        role: "user",
        content: `Crie a ramificação da história principal, o tema é "${ramificationTheme}".`,
      },
    ];
  };

  private sortRamificationSentence = (ramification: string) => {
    const sentenceOptions = [
      "Agora que você falou sobre {THEME}, me lembrei de algo...",
      "Ao falar sobre {THEME}, me veio a mente...",
      "Sobre {THEME}, eu tenho algo para falar...",
      "Pensando em {THEME}, agora lembrei de algo...",
      "Tenho curiosidade sobre {THEME}, pode me contar mais?",
      "Já que falou em {THEME}, poderia me explicar mais?",
      "Em relação a {THEME}, tenho uma pergunta...",
      "{THEME} é um tema interessante, você poderia me contar mais?",
      "Me parece que {THEME} é um tema interessante, que tal falarmos mais sobre isso?",
      "Estou intrigado com {THEME}, pode me ajudar a entender melhor?",
      "Quero aprender mais sobre {THEME}, pode me ajudar?",
      "Você falou sobre {THEME}, me conta mais sobre isso?",
    ];

    const randomIndex = Math.floor(Math.random() * sentenceOptions.length);
    return sentenceOptions[randomIndex].replace("{THEME}", ramification);
  };
}
