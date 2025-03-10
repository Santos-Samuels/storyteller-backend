/*
  Warnings:

  - You are about to drop the column `userId` on the `userInteraction` table. All the data in the column will be lost.
  - You are about to drop the column `userInteractionOptionId` on the `userInteraction` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "userInteraction" DROP CONSTRAINT "userInteraction_userId_fkey";

-- DropForeignKey
ALTER TABLE "userInteraction" DROP CONSTRAINT "userInteraction_userInteractionOptionId_fkey";

-- AlterTable
ALTER TABLE "userInteraction" DROP COLUMN "userId",
DROP COLUMN "userInteractionOptionId";
