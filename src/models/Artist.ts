export default class Artist{
    private artistId?: number;
    private name?: string;
    private description?: string;
    private hashtags?: string[];

    constructor() {
        this.hashtags = new Array<string>();
    }

    get id(){
        return this.artistId;
    }

    get artistName(){
        return this.name;
    }

    get artistDescription(){
        return this.description;
    }

    get artistHashtags(){
        return this.hashtags;
    }
}