-- DropForeignKey
ALTER TABLE "character" DROP CONSTRAINT "character_storyId_fkey";

-- DropForeignKey
ALTER TABLE "sceneCharacter" DROP CONSTRAINT "sceneCharacter_storyId_fkey";

-- DropForeignKey
ALTER TABLE "story" DROP CONSTRAINT "story_authorId_fkey";

-- DropForeignKey
ALTER TABLE "userInteraction" DROP CONSTRAINT "userInteraction_sceneCharacterId_fkey";

-- DropForeignKey
ALTER TABLE "userInteractionOption" DROP CONSTRAINT "userInteractionOption_interactionId_fkey";

-- DropForeignKey
ALTER TABLE "userInteractionOption" DROP CONSTRAINT "userInteractionOption_sceneCharacterId_fkey";

-- AddForeignKey
ALTER TABLE "story" ADD CONSTRAINT "story_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "character" ADD CONSTRAINT "character_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "story"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sceneCharacter" ADD CONSTRAINT "sceneCharacter_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "story"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userInteractionOption" ADD CONSTRAINT "userInteractionOption_sceneCharacterId_fkey" FOREIGN KEY ("sceneCharacterId") REFERENCES "sceneCharacter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userInteractionOption" ADD CONSTRAINT "userInteractionOption_interactionId_fkey" FOREIGN KEY ("interactionId") REFERENCES "userInteraction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userInteraction" ADD CONSTRAINT "userInteraction_sceneCharacterId_fkey" FOREIGN KEY ("sceneCharacterId") REFERENCES "sceneCharacter"("id") ON DELETE CASCADE ON UPDATE CASCADE;
