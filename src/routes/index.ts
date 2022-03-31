// IMPORTS
import { Router } from 'express';
import {
  createUserController,
  loginUserController,
  getUsers,
  putUserPlaylist,
  deletePlaylist,
} from '../controllers';
import {
  validateAuth,
  validateShape,
  verifyUsernameExists,
} from '../middlewares';
import { createUserShape, loginUserShape } from '../shapes';

const router = Router();

// ROTAS
router.post(
  '/user/register',
  validateShape(createUserShape),
  verifyUsernameExists,
  createUserController
);
router.post('/user/login', validateShape(loginUserShape), loginUserController);

router.put('/users/playlist', validateAuth, putUserPlaylist);
router.delete('/users/playlist', validateAuth, deletePlaylist);
router.get('/users', validateAuth, getUsers);
export default router;
