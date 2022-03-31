import { Request, Response } from 'express';
import { userLoginService } from '../services';

const loginUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const token = await userLoginService(req.body.password, req.validated);

  if (!token) {
    return res.status(401).json({ message: 'Wrong credentials. Try again!' });
  }

  return res.status(200).json({ token: token });
};

export default loginUserController;
