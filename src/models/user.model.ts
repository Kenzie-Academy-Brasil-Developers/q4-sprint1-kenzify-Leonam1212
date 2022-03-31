import { v4 } from 'uuid';
import { KENZIFYDB } from '../configs';

export default class UserModel {
  id: string;
  username: string;
  password: string;
  playlist: Object;
  
  constructor({ username, password }: UserModel) {
    this.id = v4();
    this.username = username;
    this.password = password;
    this.playlist = {};
  }
}
