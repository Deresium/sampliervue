export default class Release {
    private releaseId?: number;
    private name?: string;
    private description?: string;
    private artistId?: number;
    private artistName?: string;
    private type?: string;
    private date?: Date;

    get id(){
        return this.releaseId;
    }

    get releaseArtistName(){
        return this.artistName;
    }

    get releaseName(){
        return this.name;
    }

    set releaseName(name){
        this.name = name;
    }

    get releaseDescription(){
        return this.description;
    }

    set releaseDescription(description){
        this.description = description;
    }

    get releaseArtistId(){
        return this.artistId;
    }

    set releaseArtistId(artistId){
        this.artistId = artistId;
    }

    get releaseArtistIdString(){
        if(this.artistId)
            return this.artistId
        return "";
    }

    set releaseArtistIdString(artistId){
        if(artistId)
            this.artistId = artistId
        else
            this.artistId = undefined;
    }

    get releaseType(){
        if(this.type)
            return this.type;
        return "";
    }

    set releaseType(type){
        this.type = type;
    }

    get releaseDate(){
        return this.date;
    }

    set releaseDate(date){
        this.date = date;
    }

    get releaseDateString(){
        return this.date?.toLocaleDateString('fr');
    }

    set releaseDateString(date){
        console.log('DATE', date);
        if(date)
            this.date = new Date(date);
    }
}