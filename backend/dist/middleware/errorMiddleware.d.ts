import { Request, Response, NextFunction } from 'express';
declare const notFoundHandler: (req: Request, res: Response, next: NextFunction) => void;
declare const errorHandler: (err: Error, req: Request, res: Response) => void;
export { notFoundHandler, errorHandler };
