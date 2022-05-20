import React from 'react';
import { useParams } from 'react-router-dom';
import Articles from '../components/Articles';
import articles from './articlesContent';

const Article = () => {
    let {name} = useParams();
    let article = articles.find((article)=> name === article.name);
    let otherArticles = articles.filter(article => article.name !== name);
    let src = './../';
    if(!article)return(
        <h2>Article does not exits</h2>
    );
    return (
        
        <>
            <img className='lg:h-50 md:h-45 w-full object-cover object-center rounded'  src={src + article.thumbnail} alt={article.name} />
            <h1 className='sm:text-4xl text-2xl font-bold mt-6 text-gray-900 mb-6'>
                {article.title}
            </h1>
            {
                article.content.map((paragraph,index) => (
                    <p key={index} className="mx-auto leading-relaxed text-base mb-4">{paragraph}</p>
                ))
            }
            <h1 className='sm:text-2xl text-xl font-bold mt-4 text-gray-900 mb-6'>Others :</h1>
            <Articles article={otherArticles} src={src} />
        </>
    );
};

export default Article;