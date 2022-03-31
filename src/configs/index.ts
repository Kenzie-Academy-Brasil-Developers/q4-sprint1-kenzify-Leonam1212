import dotenv from 'dotenv';
import { v4 } from 'uuid';
import { JWTConfig, User, KenzifyDB, Playlist} from "./interfaces"

dotenv.config()

const KENZIFYDB: KenzifyDB = [];

const config: JWTConfig = {
    secretKey: process.env.SECRET_KEY,
    expiresIn: process.env.EXPIRES_IN ?? '1h'
}


export { KENZIFYDB, config, JWTConfig, User, KenzifyDB, Playlist }