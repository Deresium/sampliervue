import Release from "@/models/Release";

const parseReleases = (json: any): Array<Release> => {
    const releases = new Array<Release>();
    for(const release of json){
        releases.push(parseRelease(release));
    }
    return releases;
}

const parseRelease = (json: any): Release => {
    const release = new Release();
    Object.assign(release, json);
    release.releaseDate = new Date(json.date);
    return release;
}

export {
    parseRelease,
    parseReleases
}