-- CreateTable
CREATE TABLE "role" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "role_name_key" ON "role"("name");

-- AutoPopulate
INSERT INTO "role" ("id", "name") VALUES
('c49b1468-de38-4522-9748-cc89609bfe42', 'ADMIN'),
('ae1692a4-b7db-4a36-9ef0-60a5e98e3ce2', 'CREATOR'),
('b5feec78-8560-43f2-a8e8-3c127f0e3efc', 'VIEWER');