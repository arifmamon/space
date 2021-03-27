import Link from 'next/link'

const ArticleItem = ({articles}) => {
    return (
            <a >
                <h3>
                    {articles.title} &rarr;
                </h3>
                <img style={{height: 200}} src={articles.coverpics}/>
            </a>
        
    )
}

export default ArticleItem
