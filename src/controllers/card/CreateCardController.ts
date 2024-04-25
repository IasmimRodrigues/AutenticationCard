import { Request, Response} from 'express';
import { CreateCardService } from '../../services/card/CreateCardService';

class CreateCardController {
    async handle(req:Request, res:Response) {

        const {numero, nomeProprietario, validade, digitoSeguranca} = req.body;
        const user_id = req.user_id;

        const createCardService = new CreateCardService();
        const card = await createCardService.execute({numero,nomeProprietario,validade,digitoSeguranca,user_id}); 

        return res.json(card);
    }
}

export{CreateCardController}