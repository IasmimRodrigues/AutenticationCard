-- DropForeignKey
ALTER TABLE "Cartoes" DROP CONSTRAINT "Cartoes_id_usuario_fkey";

-- AlterTable
ALTER TABLE "Cartoes" ALTER COLUMN "id_usuario" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Cartoes" ADD CONSTRAINT "Cartoes_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;
