-- CreateTable
CREATE TABLE "Usuarios" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "modificado_em" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cartoes" (
    "id" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "nomeProprietario" TEXT NOT NULL,
    "validade" TEXT NOT NULL,
    "digitoSeguranca" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "modificado_em" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "id_usuario" TEXT NOT NULL,

    CONSTRAINT "Cartoes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cartoes" ADD CONSTRAINT "Cartoes_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
