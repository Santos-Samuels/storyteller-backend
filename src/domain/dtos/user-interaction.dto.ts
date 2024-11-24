import { ISceneCharacter } from "../entities/scene-character.entity";
import { IStory } from "../entities/story.entity";
import { IUserInteractionOption } from "../entities/user-interaction-option.entity";
import { IUser } from "../entities/user.entity";

export interface ListUserInteractionsDTO {
  storyId?: IStory["id"];
  userId?: IUser["id"];
  sceneContentId?: ISceneCharacter["id"];
  userInteractionOptionId?: IUserInteractionOption["id"];
}

export interface CreateUserInteractionDTO {
  userId: IUser["id"];
  storyId: IStory["id"];
  sceneCharacterId: ISceneCharacter["id"];
  userInteractionOptionId: IUserInteractionOption["id"];
  situation: string;
}