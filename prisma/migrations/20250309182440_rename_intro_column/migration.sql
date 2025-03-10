/*
  Warnings:

  - You are about to drop the column `situation` on the `userInteraction` table. All the data in the column will be lost.
  - Added the required column `sentence` to the `userInteraction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "userInteraction" DROP COLUMN "situation",
ADD COLUMN     "sentence" TEXT NOT NULL;
