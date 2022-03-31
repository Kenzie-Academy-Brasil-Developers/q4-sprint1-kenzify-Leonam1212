import { Request, Response } from 'express';
import { KENZIFYDB } from '../configs';
import { UserModel } from '../models';

const createUserController = (req: Request, res: Response): Response => {
  const user = { ...req.validated };
  if (KENZIFYDB.find((_) => _.username === user.username)) {
    return res.status(409).json({ error: 'User already exists' });
  }

  const newUser = Object.assign(new UserModel(user), user);
  KENZIFYDB.push(newUser);

  return res.status(201).json({
    id: newUser.id,
    username: newUser.username,
    playlist: newUser.playlist,
  });
};

export default createUserController;
