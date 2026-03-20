-- CreateEnum
CREATE TYPE "Tipo" AS ENUM ('NORMAL', 'REFRESH');

-- CreateTable
CREATE TABLE "token" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "type" "Tipo" NOT NULL DEFAULT 'NORMAL',
    "revoked" BOOLEAN NOT NULL DEFAULT false,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "token_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "token" ADD CONSTRAINT "token_id_fkey" FOREIGN KEY ("id") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
