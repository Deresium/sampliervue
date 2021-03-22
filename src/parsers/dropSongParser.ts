import DropSong from "@/models/DropSong";
import AudioFile from "@/models/AudioFile";

const parseDropSong = (json: any): Array<DropSong> => {
    const dropSongArray = new Array<DropSong>();
    for(const dropSongJson of json){
        const dropSong = new DropSong(dropSongJson.name, dropSongJson.email);
        for(const audioFileJson of dropSongJson.audioFileArray){
            dropSong.addAudioFile(new AudioFile(audioFileJson.idAudioFile, audioFileJson.fileName))
        }
        dropSongArray.push(dropSong);
    }
    return dropSongArray
}

export{
    parseDropSong
}