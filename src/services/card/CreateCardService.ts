import { PrismaClient } from "@prisma/client";
import prismaClient from "../../prisma";

interface CardRequest {
  numero: string;
  nomeProprietario: string;
  validade: string;
  digitoSeguranca: string;
  user_id: string;
}

class CreateCardService {
  async execute({
    numero,
    nomeProprietario,
    validade,
    digitoSeguranca,
    user_id,
  }: CardRequest) {

    if (!numero) {
      throw new Error("Número do cartão não enviado!");
    }
    if (!nomeProprietario) {
      throw new Error("Nome do proprietário do cartão não enviado!");
    }
    if (!validade) {
      throw new Error("Validade do cartão não enviada!");
    }
    if (!digitoSeguranca) {
      throw new Error("Dígito de segurança do cartão não enviado!");
    }

    const CardAlreadyExists = await prismaClient.cartao.findFirst({
      where: {
        numero: numero,
      },
    });

    if (CardAlreadyExists) {
      throw new Error("Cartão já cadastrado!");
    }

    const card = await prismaClient.cartao.create({
      data: {
        numero: numero,
        nomeProprietario: nomeProprietario,
        validade: validade,
        digitoSeguranca: digitoSeguranca,
        id_usuario: user_id
      },
      select: {
        id: true,
        numero: true,
        nomeProprietario: true,
        validade: true,
        digitoSeguranca: true,
      },
    });
    return card;

  }
}

export { CreateCardService };
