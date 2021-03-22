
import axiosServer from "@/axios/axiosServer";
import DropSong from "@/models/DropSong";
import {parseDropSong} from "@/parsers/dropSongParser";

const queryDropSong = async(): Promise<Array<DropSong>> => {
    const response = await axiosServer.get('/dropSong');
    return parseDropSong(response.data);
}

export{
    queryDropSong
}