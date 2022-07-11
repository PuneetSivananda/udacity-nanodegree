import { Request, Response, NextFunction } from 'express';

const urlParser = (req: Request, res: Response, next: NextFunction) => {
  res.locals.file = req.query['file'];
  res.locals.width = req.query['width'];
  res.locals.height = req.query['height'];
  next();
};

export default urlParser;
