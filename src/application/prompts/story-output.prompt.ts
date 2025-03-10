export const expectedStoryOutputFormatPrompt = `
enum CharacterEmotionEnum {
  HAPPY = "happy",
  SAD = "sad",
  SURPRISED = "surprised",
  THINKING = "thinking",
  CONFUSED = "confused",
  VERY_HAPPY = "very-happy",
  NEUTRAL = "neutral",
  FRUSTRATED = "frustrated",
  EXCITED = "excited",
}

enum ScenePositionEnum {
  LEFT = "left",
  RIGHT = "right",
  CENTER = "center",
}

export enum CharacterGenderEnum {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

interface Character {
  id: string;

  name: string;
  role: string;
  position: ScenePositionEnum;
  avatarUrl: string; // no implement
  gender: CharacterGenderEnum;
}

interface ISceneCharacter {
  id: string;
  characterId: Character["id"];
  order: number;
  speech: string;
  emotion: CharacterEmotionEnum;
  avatarUrl: string; // no implement
  
  interaction?: IUserInteraction;
}

interface IStory {
  id: string;
  theme: string;
  title: string;
  intro: string;
  summary: string;
  backgroundUrl: string; // no implement
  
  characters?: Character[];
  sceneCharacters?: ISceneCharacter[];
}

interface IUserInteraction {
  id: string;
  storyId: IStory["id"];
  sceneCharacterId: ISceneCharacter["id"];

  sentence: string;
  options: IUserInteractionOption[];
}

interface IUserInteractionOption {
  id: string;
  sceneCharacterId: ISceneCharacter["id"];
  nextSceneCharacterId: ISceneCharacter["id"];

  label: string;
  feedback: string;
}`;
