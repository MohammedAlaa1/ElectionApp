/*
  Warnings:

  - You are about to drop the column `email` on the `Candidate` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[imagePath]` on the table `Candidate` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `imagePath` to the `Candidate` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Candidate_email_key";

-- AlterTable
ALTER TABLE "Candidate" DROP COLUMN "email",
ADD COLUMN     "imagePath" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Candidate_imagePath_key" ON "Candidate"("imagePath");
