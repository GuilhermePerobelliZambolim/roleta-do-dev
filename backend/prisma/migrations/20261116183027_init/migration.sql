-- CreateTable
CREATE TABLE "Challenge" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "dica" TEXT NOT NULL,
    "tempoEstimado" INTEGER NOT NULL,
    "linguagem" TEXT NOT NULL,
    "dificuldade" TEXT NOT NULL,

    CONSTRAINT "Challenge_pkey" PRIMARY KEY ("id")
);
