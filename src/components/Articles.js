import React from 'react';
import { Link } from 'react-router-dom';

const Articles = ({article,src}) => {
    return (
        <>
            <div className='flex flex-wrap -m-4'>
                    { 
                        article.map((article,index)=>(
                            <div key={index} className="p-4 md:w-1/2 ">
                                <div className='h-full border-2 border-gray-200 border-opacity-80 rounded-lg overflow-hidden'>
                                    <Link to={`/article/${article.name}`}>
                                        <img className='lg:h-48 md:h-36 w-full object-cover object-center ' src={article.thumbnail} alt={article.name} />
                                    </Link>
                                    <div className='p-6'>
                                        <Link to={`/article/${article.name}`}>
                                            <h3 className='title-font text-lg font-medium text-gray-900 mb-3'>
                                                {article.title}
                                            </h3>
                                        </Link>
                                        <p className='leading-relaxed mb-3'>
                                            {article.content[0].substring(0,120)} ...
                                        </p>
                                        <div className='flex item-center flex-wrap'>
                                            <Link to={`/article/${article.name}`}
                                            className="p-3 text-white rounded bg-indigo-500 inline-flex items-center lg:mb-0"
                                            >
                                                Learn more...
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
        </>
    );
};

export default Articles;