type ExpiresIN = string | number;

interface JWTConfig {
  secretKey: string;
  expiresIn: ExpiresIN;
}
interface Playlist {
  title: string;
  duration: string;
  releasedDate: string;
  listenedByMe: number;
  genres: Array<string>
}

interface User {
  id: string;
  username: string;
  password: string;
  playlist: { [ keys : string]: Playlist };
}
// { [ keys : string]: {} }

type KenzifyDB = Array<User>;

export { JWTConfig, User, KenzifyDB, Playlist };
