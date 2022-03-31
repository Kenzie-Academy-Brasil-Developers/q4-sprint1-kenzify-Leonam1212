import { v4 } from 'uuid';
import { KENZIFYDB } from '../configs';

export default class PlaylistModel {
  title: string;
  duration: string;
  releasedDate: string;
  listenedByMe: number;
  genres: Array<string>;
  
  constructor({ title, duration, releasedDate, genres }: PlaylistModel) {
    this.title = title;
    this.duration = duration;
    this.releasedDate = releasedDate;
    this.listenedByMe = 0
    this.genres = genres
  }

}
