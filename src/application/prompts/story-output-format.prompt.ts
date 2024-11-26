export const storyOutputFormatPrompt = `enum CharacterEmotionEnum {
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

interface Character {
  id: string;
  storyId: IStory["id"];

  name: string;
  role: string;
  position: ScenePositionEnum;
  avatarUrl: string; // no implement
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
  sceneCaracters?: ISceneCharacter[];
}

interface IUserInteraction {
  id: string;
  sceneCharacteId: ISceneCharacter["id"];

  situation: string;

  options?: IUserInteractionOption[];
}

interface IUserInteractionOption {
  id: string;
  interactionId: IUserInteraction["id"];
  nextSceneCharacteId: ISceneCharacter["id"];

  label: string;
  feedback: string;
}`;

// Crie uma história interativa sobre o tema {theme}, na qual ser um diálogo entre {amountCharacter} personagens.

// Regras obrigatórias para a criação da história:
// - A história deve ter um início, meio e fim.
// - Cada interação feita deve impactar no desenrolar da história.
// - O diálogo deve ser coerente e seguir uma linha de raciocínio.
// - Deve haver no mínimo {amountScenes} cenas.
// - Nem todas as cenas precisam ter interações.
// - O retorno deve ser no formato JSON.
// - O JSON deve incluir todas as cenas.
