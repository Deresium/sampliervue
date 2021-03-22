export default class AudioFile{
    private idAudioFile: number;
    private fileName: string;

    constructor(idAudioFile: number, fileName: string) {
        this.idAudioFile = idAudioFile;
        this.fileName = fileName;
    }

    getIdAudioFile(){
        return this.idAudioFile;
    }

    getFileName(){
        return this.fileName;
    }

    getExtension(){
        const splitName = this.fileName.split('.');
        return splitName[splitName.length - 1].toLowerCase();
    }
}