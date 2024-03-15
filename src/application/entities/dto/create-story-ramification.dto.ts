import { IGPTStory } from "@/domain/entities/gpt-story";
import { ChatCompletionCreateParams } from "openai/resources";

export interface CreateStoryRamificationDTO {
  ramificationTheme: string;
  conversationHistory: ChatCompletionCreateParams["messages"];
}

export interface CreateStoryRamificationResponse {
  ramificationStory: IGPTStory;
  updatedConversationHistory: ChatCompletionCreateParams["messages"];
}
