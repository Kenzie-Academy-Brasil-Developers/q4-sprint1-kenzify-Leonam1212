import { User, KENZIFYDB } from '../configs';

declare global {
  namespace Express {
    interface Request {
      validated: User;
      user: User;
      username: string;
    }
  }
}