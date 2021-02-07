import Article from "@/models/Article";
import {parseArticle, parseArticles} from "@/parsers/articleParser";
import axiosServer from "@/axios/axiosServer";

const queryArticles = async(type: string): Promise<Array<Article>> => {
    const response = await axiosServer.get('/article', {params:{type}});
    return parseArticles(response.data);
}

const queryArticle = async(articleId: number | undefined): Promise<Article> => {
    const response = await axiosServer.get(`/article/${articleId}`);
    return parseArticle(response.data);
}

export{
    queryArticles,
    queryArticle
}