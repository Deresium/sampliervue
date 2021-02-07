import Article from "@/models/Article";

const parseArticles = (json: any): Array<Article> => {
    const articles = new Array<Article>();
    for(const article of json){
        articles.push(parseArticle(article));

    }
    return articles;
}

const parseArticle = (json: any): Article => {
    const newArticle = new Article();
    Object.assign(newArticle, json);
    newArticle.articleDate = new Date(json.date);
    return newArticle
}

export{
    parseArticle,
    parseArticles
}
