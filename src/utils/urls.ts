const urlPicture = (articleId: number | undefined, pictureNumber: number) => `${process.env.VUE_APP_SERVER_URL}/article/${articleId}/image/${pictureNumber}`

export {
    urlPicture
}
