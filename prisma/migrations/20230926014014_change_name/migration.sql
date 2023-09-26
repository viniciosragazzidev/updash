/*
  Warnings:

  - You are about to drop the `Tecnicos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Tecnicos";

-- CreateTable
CREATE TABLE "Tecnico" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "image" TEXT,
    "number" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Tecnico_pkey" PRIMARY KEY ("id")
);
