-- CreateTable
CREATE TABLE "servidores" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "servidores_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "servidores_matricula_key" ON "servidores"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "servidores_cpf_key" ON "servidores"("cpf");

-- CreateIndex
CREATE INDEX "servidores_matricula_cpf_idx" ON "servidores"("matricula", "cpf");
