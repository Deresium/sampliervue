import axiosServer from "@/axios/axiosServer";
import {parseArtist, parseArtists} from "@/parsers/artistParser";

const queryArtists = async() => {
    const response = await axiosServer.get('/artists');
    return parseArtists(response.data);
}

const queryArtist = async(artistId: number | undefined) => {
    const response = await axiosServer.get(`/artists/${artistId}`);
    return parseArtist(response.data);
}

export {
    queryArtist,
    queryArtists
}