import { useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { useAPI } from '../context';
import Pagination from '../pagintion';

let PageSize = 10;

function News() {
    const { data: articles, loading: isLoading } = useAPI();
    const [currentPage, setCurrentPage] = useState(1);
    const currentArticleData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return articles.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, articles]);

    // Articles are being fetched and populated using map
    const mappedArticles = currentArticleData.map((article, index) => {
        return (
            <div key={index} className="container flex flex-col lg:flex-row  mb-4 gap-4 lg:gap-8 mt-14 lg:mt-0 p-4 md:p-8 lg:p-8 bg-white border-news-grey my-10 hover:shadow-xl">
                <div className="h-full md:h-44 w-full lg:w-64 md:w-64 content-center align-center justify-center item-center mb-5 lg:mb-0 ">
                    {
                        article.urlToImage ?
                            <img src={article.urlToImage} alt={article.title} className=" w-full md:w-52 lg:w-full h-full md:h-44 lg:h-44 auto mt-8 lg:mt-0 md:lg-0" /> :
                            <div className="flex justify-center items-center bg-gray-400 w-full h-44">
                                <h3>No Image</h3>
                            </div>
                    }
                </div>
                <div className="flex flex-1 flex-col lg:flex-row item-center lg:items-start  ">

                    <div className="flex flex-1">
                        <h2 className="capitalize text-news-grey text-1xl md:text-lg lg:text-lg text-start lg:text-left ">
                            By: {article.source.name}
                        </h2>
                    </div>
                    <div className="block md:block lg:block item-center  gap-2 lg:items-start w-full md:w-3/4 tracking-wider">
                        <p className="text-sm text-news-grey md:text-2xl lg:text-lg my-px tracking-wider"><FontAwesomeIcon icon={faUser} />&nbsp; &nbsp; &nbsp;{article.author ? article.author : article.source.name}</p>
                        <p className="text-base font-medium md:text-2xl lg:text-lg my-px text-grey tracking-wide leading-6">{article.title} </p>
                        <p className="text-sm text-news-grey md:text-2xl lg:text-lg my-px tracking-wider"><FontAwesomeIcon icon={faClock} />&nbsp; &nbsp; &nbsp;{new Date(article.publishedAt).toDateString()}</p>
                        <div className="my-5">
                            <a href={article.url} className="btn btn-purple border-2 border-news-purple hover:bg-news-white hover:text-news-purple font-bold hover:border-news-purple py-10 px-7 lg:my-2">Read News &#8594;</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <section className="px-10 lg:px-20">
            {isLoading ? (<div className="px-20 py-20 text-3xl text-center">Loading News...</div>) : mappedArticles}
            <div>
                <Pagination
                    className="border-blue-800"
                    currentPage={currentPage}
                    totalCount={articles.length}
                    pageSize={10}
                    onPageChange={page => setCurrentPage(page)}
                />
            </div>
        </section>
    )
}

export default News;
