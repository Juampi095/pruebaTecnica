import { NextFunction, Request, Response } from "express";

export const requireAuth = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.cookies.Authorization) {

        return res.status(401).json({
            code: 401,
            message: 'Unauthorized',
            data: null,
        });
    }
    return next();
};

