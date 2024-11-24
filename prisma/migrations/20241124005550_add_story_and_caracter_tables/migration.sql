-- CreateEnum
CREATE TYPE "CharacterPositionEnum" AS ENUM ('LEFT', 'RIGHT', 'CENTER');

-- CreateEnum
CREATE TYPE "CharacterEmotionEnum" AS ENUM ('HAPPY', 'SAD', 'SURPRISED', 'THINKING', 'CONFUSED', 'VERY_HAPPY', 'NEUTRAL', 'FRUSTRATED', 'EXCITED');

-- CreateTable
CREATE TABLE "story" (
    "id" TEXT NOT NULL,
    "theme" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "into" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "backgroundUrl" TEXT,
    "authorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "story_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "caracter" (
    "id" TEXT NOT NULL,
    "storyId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "position" "CharacterPositionEnum" NOT NULL,
    "avatarUrl" TEXT,

    CONSTRAINT "caracter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sceneCharacter" (
    "id" TEXT NOT NULL,
    "caracterId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "speech" TEXT NOT NULL,
    "emotion" "CharacterEmotionEnum" NOT NULL,
    "avatarUrl" TEXT,

    CONSTRAINT "sceneCharacter_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "story" ADD CONSTRAINT "story_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "caracter" ADD CONSTRAINT "caracter_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "story"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sceneCharacter" ADD CONSTRAINT "sceneCharacter_caracterId_fkey" FOREIGN KEY ("caracterId") REFERENCES "caracter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
