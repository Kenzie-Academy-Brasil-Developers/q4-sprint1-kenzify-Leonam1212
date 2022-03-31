import { Request, Response } from 'express';
import { KENZIFYDB, User, Playlist } from '../configs';
import { PlaylistModel } from '../models';

export const putUserPlaylist = (req: Request, res: Response): Response => {
  const data = req.body;
  const { user } = req;
  const song = req.query.song as string;
  const artist = req.query.artist as string;

  const findUser: User | undefined = KENZIFYDB.find(
    (u) => u.username === user.username
  );

  if (!findUser) {
    return res.status(404).json({ message: 'User not found' });
  }

  for (const [key] of Object.entries(data)) {
    // BILLIE EILISH
    for (let i = 0; i < data[key].length; i++) {
      // ITERANDO O ARRAY DE BILLIE EILISH
      data[key][i].title =
        data[key][i].title[0].toUpperCase() + data[key][i].title.slice(1); // Deixando a primeira letra maiuscula

      const newPlaylist = new PlaylistModel(data[key][i]); // CRIANDO A MODEL PLAYLIST CONFORME OS INDEX DO ARRAY BILLIE EILISH
      data[key][i] = newPlaylist;
      findUser.playlist = data;
    }
  }

  if (artist && song) {
    const artistPlaylist: any = findUser.playlist[artist];
    for (let i = 0; i < artistPlaylist.length; i++) {
      if (
        artistPlaylist[i].title.toLocaleLowerCase() === song.toLocaleLowerCase()
      ) {
        artistPlaylist[i].listenedByMe += 1;
      }
    }
  }

  return res.status(200).json(findUser);
};
