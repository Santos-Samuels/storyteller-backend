export const storyOutputFormatPrompt = `export type EmotionTypes =
| "happy"
| "sad"
| "surprised"
| "thinking"
| "confused"
| "very-happy"
| "neutral";

export type ScenePosition = "left" | "right";

export interface IHistory {
theme: string;
resume: string;
ramifications?: string[];
}

export interface IScene {
speech: string;
emotion: EmotionTypes;
position: ScenePosition;
}`;
