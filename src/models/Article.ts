export default class Article{
    private articleId?: number;
    private title?: string;
    private subtitle?: string;
    private articleType?: string;
    private date?: Date;
    private articleTypeCode?: string;

    get id(){
        return this.articleId
    }

    get articleTitle(){
        return this.title;
    }

    get articleSubtitle(){
        return this.subtitle;
    }

    get articleDate(){
        return this.date;
    }

    set articleDate(date){
        this.date = date;
    }

    get articleDateString(){
        if(this.date)
            return this.date.toLocaleString('fr');
        return null;
    }

    get typeCode(){
        return this.articleTypeCode;
    }

    get type(){
        return this.articleType;
    }

}