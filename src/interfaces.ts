export interface BaseEntity {
  id: string;
  created_at: number;
  updated_at: number;
}

export type EmotionTypes =
  | "happy"
  | "sad"
  | "surprised"
  | "thinking"
  | "confused"
  | "very-happy"
  | "neutral";

export type ScenePosition = "left" | "right";

export interface Role extends BaseEntity {
  name: string;
}

export interface User extends BaseEntity {
  name: string;
  email: string;
  password: string;
  roleId: string;

  role?: Role;
}

export interface IHistory extends BaseEntity {
  userId: User["id"];
  theme: string;
  resume: string;
  ramifications?: string[];

  user?: User;
}

export interface ICaracter extends BaseEntity {
  name: string;
  baseSpriteRef: string;
}

export interface IScene extends BaseEntity {
  historyId: IHistory["id"];
  caracterId: ICaracter["id"];
  caracterSpriteRef: string; // baseSpriteRef + emotion
  speech: string;
  emotion: EmotionTypes;
  position: ScenePosition;
  backgroundRef: string;

  caracter?: ICaracter;
  history?: IHistory;
}

export interface GPTHistory {
  theme: IHistory["theme"];
  resume: IHistory["resume"];
  ramifications: IHistory["ramifications"];

  scenes: Pick<IScene, "speech" | "emotion" | "position">[];
}
