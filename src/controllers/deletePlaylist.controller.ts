import { Request, Response } from 'express';
import { KENZIFYDB, User } from '../configs';

const deletePlaylist = (req: Request, res: Response): Response => {
  const song = req.query.song as string;
  const artist = req.query.artist as string;
  const { user } = req;

  const findUser: User | undefined = KENZIFYDB.find(
    (u) => u.username === user.username
  );

  if (!findUser) {
    return res.status(404).json({ message: 'User not found' });
  }

  if (artist && song) {
    const artistPlaylist: any = findUser!.playlist[artist];
    for (let i = 0; i < artistPlaylist.length; i++) {
      if (
        artistPlaylist[i].title.toLocaleLowerCase() === song.toLocaleLowerCase()
      ) {
        const indexMusic = artistPlaylist.indexOf(artistPlaylist[i]);
        artistPlaylist.splice(indexMusic, 1);
      }
      else{
          return res.status(404).json({ message: 'Music not found'})
      }
    }
  }

  return res.status(204).json('');
};
export default deletePlaylist;
