/*
  Warnings:

  - A unique constraint covering the columns `[sceneCharacterId]` on the table `userInteraction` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `interactionId` to the `userInteractionOption` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "userInteraction" DROP CONSTRAINT "userInteraction_sceneCharacterId_fkey";

-- AlterTable
ALTER TABLE "userInteraction" ALTER COLUMN "sceneCharacterId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "userInteractionOption" ADD COLUMN     "interactionId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "userInteraction_sceneCharacterId_key" ON "userInteraction"("sceneCharacterId");

-- AddForeignKey
ALTER TABLE "userInteractionOption" ADD CONSTRAINT "userInteractionOption_interactionId_fkey" FOREIGN KEY ("interactionId") REFERENCES "userInteraction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userInteraction" ADD CONSTRAINT "userInteraction_sceneCharacterId_fkey" FOREIGN KEY ("sceneCharacterId") REFERENCES "sceneCharacter"("id") ON DELETE SET NULL ON UPDATE CASCADE;
