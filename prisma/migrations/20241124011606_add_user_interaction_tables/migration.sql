/*
  Warnings:

  - Added the required column `storyId` to the `sceneCharacter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sceneCharacter" ADD COLUMN     "storyId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "userInteractionOption" (
    "id" TEXT NOT NULL,
    "userInteractionId" TEXT NOT NULL,
    "nextScaneCaracterId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "feedback" TEXT NOT NULL,

    CONSTRAINT "userInteractionOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userInteraction" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "sceneCharacterId" TEXT NOT NULL,
    "userInteractionOptionId" TEXT NOT NULL,
    "situation" TEXT NOT NULL,

    CONSTRAINT "userInteraction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "sceneCharacter" ADD CONSTRAINT "sceneCharacter_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "story"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userInteractionOption" ADD CONSTRAINT "userInteractionOption_userInteractionId_fkey" FOREIGN KEY ("userInteractionId") REFERENCES "userInteraction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userInteraction" ADD CONSTRAINT "userInteraction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userInteraction" ADD CONSTRAINT "userInteraction_sceneCharacterId_fkey" FOREIGN KEY ("sceneCharacterId") REFERENCES "sceneCharacter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
