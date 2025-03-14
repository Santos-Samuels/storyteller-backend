/*
  Warnings:

  - Made the column `sceneCharacterId` on table `userInteraction` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "userInteraction" DROP CONSTRAINT "userInteraction_sceneCharacterId_fkey";

-- AlterTable
ALTER TABLE "userInteraction" ALTER COLUMN "sceneCharacterId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "userInteraction" ADD CONSTRAINT "userInteraction_sceneCharacterId_fkey" FOREIGN KEY ("sceneCharacterId") REFERENCES "sceneCharacter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
