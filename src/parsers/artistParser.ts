import Artist from "@/models/Artist";

const parseArtists = (json: any): Array<Artist> => {
    const artists = new Array<Artist>();
    for(const artist of json){
        artists.push(parseArtist(artist));
    }
    return artists;
}

const parseArtist = (json: any): Artist => {
    const artist = new Artist();
    Object.assign(artist, json);
    return artist;
}

export {
    parseArtist,
    parseArtists
}