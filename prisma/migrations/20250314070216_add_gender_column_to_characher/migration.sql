/*
  Warnings:

  - Added the required column `gender` to the `character` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "character" ADD COLUMN     "gender" TEXT NOT NULL;
