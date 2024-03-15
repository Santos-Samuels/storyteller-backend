export const storyOutputFormatPrompt = `export type EmotionTypes =
| "happy"
| "sad"
| "surprised"
| "thinking"
| "confused"
| "very-happy"
| "neutral";

export type ScenePosition = "left" | "right";

export interface IStory {
theme: string;
summary: string;
ramifications?: string[];
isRamification?: boolean;
}

export interface IScene {
speech: string;
emotion: EmotionTypes;
position: ScenePosition;
ramificationTheme?: string;
}`;
