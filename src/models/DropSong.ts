import AudioFile from "@/models/AudioFile";

export default class DropSong{
    private name: string;
    private email: string;
    private audioFiles: Array<AudioFile>;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
        this.audioFiles = new Array<AudioFile>();
    }

    addAudioFile(audioFile: AudioFile){
        this.audioFiles.push(audioFile);
    }

    getName(){
        return this.name;
    }

    getEmail(){
        return this.email;
    }

    getAudioFiles(){
        return this.audioFiles;
    }

}