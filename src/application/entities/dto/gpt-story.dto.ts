import { IScene } from "@/domain/entities/scene.entity";
import { IStory } from "@/domain/entities/story.entity";

export interface GPTStory {
  theme: IStory["theme"];
  resume: IStory["resume"];
  ramifications: IStory["ramifications"];

  scenes: Pick<IScene, "speech" | "emotion" | "position">[];
}
