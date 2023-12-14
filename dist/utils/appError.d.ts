export declare class AppError extends Error {
    statusCode: number;
    status: string;
    isOperational: boolean;
    errors: any[] | null;
    constructor(message: string | any[], statusCode: number);
}
