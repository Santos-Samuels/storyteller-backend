-- CreateTable
CREATE TABLE "userInteractionOption" (
    "id" TEXT NOT NULL,
    "sceneCharacterId" TEXT NOT NULL,
    "nextSceneCharacterId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "feedback" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "userInteractionOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userInteraction" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "storyId" TEXT NOT NULL,
    "sceneCharacterId" TEXT NOT NULL,
    "userInteractionOptionId" TEXT NOT NULL,
    "situation" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "userInteraction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "userInteractionOption" ADD CONSTRAINT "userInteractionOption_sceneCharacterId_fkey" FOREIGN KEY ("sceneCharacterId") REFERENCES "sceneCharacter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userInteraction" ADD CONSTRAINT "userInteraction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userInteraction" ADD CONSTRAINT "userInteraction_sceneCharacterId_fkey" FOREIGN KEY ("sceneCharacterId") REFERENCES "sceneCharacter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userInteraction" ADD CONSTRAINT "userInteraction_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "story"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userInteraction" ADD CONSTRAINT "userInteraction_userInteractionOptionId_fkey" FOREIGN KEY ("userInteractionOptionId") REFERENCES "userInteractionOption"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
