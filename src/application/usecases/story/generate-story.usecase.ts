import { BaseUsecase } from "@/application/entities/base-usecase";
import { expectedStoryOutputFormatPrompt } from "@/application/prompts/story-output.prompt";
import { requeredStoryStandardPrompt } from "@/application/prompts/story-standard.prompt";
import { GenerateStoryDTO } from "@/domain/dtos/story.dto";
import { ChatGPTApiClient } from "@/infra/chatGPT/chat-gpt-api-client";
import { ChatCompletionCreateParams } from "openai/resources";

export class GenerateStoryUsecase
  implements BaseUsecase<GenerateStoryDTO, string>
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

    return response.choices[0].message.content;
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
}
