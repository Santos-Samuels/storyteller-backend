import { IScene } from "@/domain/entities/scene.entity";
import { IStory } from "@/domain/entities/story.entity";

type GPTStoryScene = Pick<
  IScene,
  "speech" | "emotion" | "position" | "ramificationTheme"
>;

export interface IGPTStory {
  theme: IStory["theme"];
  summary: IStory["summary"];
  ramifications: IStory["ramifications"];
  isRamification: IStory["isRamification"];

  scenes: GPTStoryScene[];
}
