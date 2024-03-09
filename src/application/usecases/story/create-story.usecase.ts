import { BaseUsecase } from "@/application/entities/base-usecase";
import { CreateStoryDTO } from "@/application/entities/dto/create-story.dto";
import { GPTStory } from "@/application/entities/dto/gpt-story.dto";
import { storyOutputFormatPrompt } from "@/application/prompts/story-output-format.prompt";
import { ChatGPTApiClient } from "@/infra/chatGPT/chat-gpt-api-client";

export class CreateStoryUsecase
  implements BaseUsecase<CreateStoryDTO, GPTStory>
{
  constructor(
    private readonly chatGPTApiClient: ChatGPTApiClient,
    private readonly OPENAI_MODEL: string
  ) {}

  execute = async (params: CreateStoryDTO) => {
    const { theme } = params;
    console.log("🚀 ~ execute= ~ theme:", theme);

    const openAI = this.chatGPTApiClient.getClient();
    const response = await openAI.chat.completions.create({
      messages: [
        {
          role: "assistant",
          content: `Regras obrigatórias para a criação da história:
          - O diálogo deve ser livre, com ambos podendo fazer perguntas ou afirmativas sobre o tema.
          - Devem ser abordados quatro pilares desse tema em "ramifications".
          - O resumo da história será em "resume".
          - O retorno será no formato .json.
          - O JSON deve incluir todas as cenas.
          - Deve haver 20 cenas no mínimo.`,
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
      ],
      model: this.OPENAI_MODEL,
      response_format: { type: "json_object" },
    });

    if (!response.choices[0].message.content) {
      throw new Error("Erro ao criar história");
    }

    return response.choices[0].message.content as unknown as GPTStory;
  };
}
