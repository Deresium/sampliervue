import axiosServer from "@/axios/axiosServer";
import Release from "@/models/Release";
import {parseRelease, parseReleases} from "@/parsers/releaseParser";

const queryReleases = async(): Promise<Array<Release>> => {
    const response = await axiosServer.get('/release');
    return parseReleases(response.data);
}

const queryRelease = async(releaseId: number | undefined): Promise<Release> => {
    const response = await axiosServer.get(`/release/${releaseId}`);
    return parseRelease(response.data);
}

export{
    queryRelease,
    queryReleases
}