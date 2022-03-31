import { KENZIFYDB } from '../configs';
import { NextFunction, Request, Response } from 'express';
const verifyUsernameExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { username } = req.validated;
  const user = KENZIFYDB.find((u) => u.username === username);

  if (user) {
    return res.status(422).json({ message: 'You can not use this username.' });
  }

  req.username = username
  return next();
};

export default verifyUsernameExists;
