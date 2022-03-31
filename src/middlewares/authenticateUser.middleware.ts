import { NextFunction, Request, Response } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import { config, User } from '../configs';

const validateAuth = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'missing authorization' });
  }

  jsonwebtoken.verify(token, config.secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: err });
    }

    req.user = decoded as User;
    return next();
  });
};

export default validateAuth