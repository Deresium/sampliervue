const urlPicture = (articleId: number | undefined, pictureNumber: number) => `${process.env.VUE_APP_SERVER_URL}/article/${articleId}/image/${pictureNumber}`

const urlArtistPicture = (artistId: number | undefined, pictureNumber: number) => `${process.env.VUE_APP_SERVER_URL}/artist/${artistId}/image/${pictureNumber}`

export {
    urlPicture,
    urlArtistPicture
}
