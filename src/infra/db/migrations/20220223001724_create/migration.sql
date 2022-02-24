/*
  Warnings:

  - Added the required column `status` to the `Rules` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rules" ADD COLUMN     "status" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Votes" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "ruleId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Votes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Votes" ADD CONSTRAINT "Votes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Votes" ADD CONSTRAINT "Votes_ruleId_fkey" FOREIGN KEY ("ruleId") REFERENCES "Rules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
