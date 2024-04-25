import { Request, Response } from "express";
import { ValidateCardService } from "../../services/card/ValidateCardService";


class ValidateCardController {
  async handle(req: Request, res: Response) {
    const { numero } = req.body;
    const user_id = req.user_id;

    const validateCardService = new ValidateCardService();
    const validation = await validateCardService.execute({
      numero,
      user_id,
    });

    return res.json(validation);
  }
}

export {ValidateCardController};
