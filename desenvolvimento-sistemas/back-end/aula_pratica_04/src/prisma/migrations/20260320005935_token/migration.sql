/*
  Warnings:

  - Added the required column `usuarioId` to the `token` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "token" DROP CONSTRAINT "token_id_fkey";

-- AlterTable
ALTER TABLE "token" ADD COLUMN     "usuarioId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "token" ADD CONSTRAINT "token_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
