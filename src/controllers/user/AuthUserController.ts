import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";
 
class AuthUserController{
    async handle(req: Request, res: Response){
        const {email, senha, login} = req.body;
        const authUserService = new AuthUserService();
        const auth = await authUserService.execute({
            email,
            senha, 
            login
        })
        return res.json(auth);
    }
}
export {AuthUserController}