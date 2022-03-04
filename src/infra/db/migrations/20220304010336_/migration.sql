/*
  Warnings:

  - The `value` column on the `Votes` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Votes" DROP COLUMN "value",
ADD COLUMN     "value" BOOLEAN NOT NULL DEFAULT false;
