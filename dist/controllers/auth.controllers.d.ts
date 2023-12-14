import { Request, Response } from 'express';
declare const authController: {
    logIn(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    register(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
};
export default authController;
