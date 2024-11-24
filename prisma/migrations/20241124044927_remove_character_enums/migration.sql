/*
  Warnings:

  - Changed the type of `position` on the `character` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `avatarUrl` on table `character` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `emotion` on the `sceneCharacter` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `avatarUrl` on table `sceneCharacter` required. This step will fail if there are existing NULL values in that column.
  - Made the column `backgroundUrl` on table `story` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "character" DROP COLUMN "position",
ADD COLUMN     "position" TEXT NOT NULL,
ALTER COLUMN "avatarUrl" SET NOT NULL;

-- AlterTable
ALTER TABLE "sceneCharacter" DROP COLUMN "emotion",
ADD COLUMN     "emotion" TEXT NOT NULL,
ALTER COLUMN "avatarUrl" SET NOT NULL;

-- AlterTable
ALTER TABLE "story" ALTER COLUMN "backgroundUrl" SET NOT NULL;

-- DropEnum
DROP TYPE "CharacterEmotionEnum";

-- DropEnum
DROP TYPE "CharacterPositionEnum";
