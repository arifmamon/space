import ArticleItem from './ArticleItem';


const ArticleList = ({articles}) => {
    return (
        <div>
        {articles.map((articles) => (
            <ArticleItem articles={articles}/>
        ))}
        </div>
    )
}

export default ArticleList;