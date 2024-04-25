import { PrismaClient } from "@prisma/client";
import prismaClient from "../../prisma";

interface CardRequest {
  numero: string,
  user_id: string,
}

class ValidateCardService {
  async execute({
    numero,
    user_id,
  }: CardRequest) {

    console.log(user_id)

    const card = await prismaClient.cartao.findFirst({
        where: {
          numero: numero,
        },
      });

    if (!card) {
        throw new Error("Cartão não encontrado!");
    }
    
    if (card.id_usuario !== user_id) {
        throw new Error("Esse cartão não pertence a esse usuário!");
      }

    return {
        mensagem: 'Esse cartão pertence a esse usuário!'
    }

  }
   
}

export { ValidateCardService };
