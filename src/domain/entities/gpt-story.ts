import { IUser } from "./user.entity";

export interface IGPTStory {
  id: string;
  theme: string;
  title: string;
  intro: string;
  summary: string;
  backgroundUrl: string; // no implement
  authorId: IUser["id"];

  characters: GPTCharacter[];
  sceneCharacters: GPTSceneCharacter[];
}

export interface GPTCharacter {
  id: string;
  name: string;
  role: string;
  position: string;
  gender: string;
  avatarUrl: string; // no implement
  storyId: string;
}

export interface GPTSceneCharacter {
  id: string;
  characterId: string;
  order: number;
  speech: string;
  emotion: string;
  avatarUrl: string; // no implement
  storyId: string;

  interaction?: GPTUserInteraction;
}

interface GPTUserInteraction {
  id: string;
  sceneCharacterId: string;
  storyId: string;

  sentence: string;

  options: GPTUserInteractionOption[];
}

interface GPTUserInteractionOption {
  id: string;
  sceneCharacterId: string;
  nextSceneCharacterId: string;

  label: string;
  feedback: string;
}
