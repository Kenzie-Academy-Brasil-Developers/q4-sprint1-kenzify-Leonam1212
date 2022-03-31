"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlaylistModel {
    constructor({ title, duration, releasedDate, listenedByMe, genres }) {
        this.title = title;
        this.duration = duration;
        this.releasedDate = releasedDate;
        this.listenedByMe = listenedByMe;
        this.genres = genres;
    }
}
exports.default = PlaylistModel;
