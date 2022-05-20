import React from 'react';

import Articles from '../components/Articles';
import articles from './articlesContent';

const ArticlesList = () => {
    
    return (
        
            <>
            <h1 className='sm:text-4xl text-2xl font-bold mt-6 text-gray-900 mb-6'
            >
                Articles :
            </h1>
            <div className='container py-4 mx-auto'>
                <Articles article={articles}/>
            </div>
        </>
      
    );
};

export default ArticlesList;