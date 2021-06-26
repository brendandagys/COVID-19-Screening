import { Request, Response, NextFunction } from 'express';
export declare const notFoundHandler: (req: Request, res: Response, next: NextFunction) => void;
export declare const errorHandler: (err: Error, req: Request, res: Response, next: NextFunction) => void;
