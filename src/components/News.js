import me from './me.jpg'

const News = () =>{
    return(
        <section class="container bg-news-white">
            <div className="container flex flex-row lg:flex-row px-8 bg-news-grey mb-4 gap-8 mt-14 lg:mt-0 p-4 md:p-8 lg:p-8 border-b border-news-grey">
                <div className="h-32  md:h-44 md:h-44 
                w-20 lg:w-64 md:w-64 
                content-center align-center 
                justify-center item-center bg-news-red">
                <img src={me} alt="" className="
                w-20
                md:w-52 
                lg:w-52
                h-32
                md:h-44
                lg:h-44
                mx-auto
                "/>

                </div>
                <div className="flex flex-1 flex-col lg:flex-row item-center lg:items-start bg-new-purple ">
                   
                   <div className="flex flex-1">
                       <h2 className="capitalize text-bookmark-blue text-1xl md:text-2xl lg:text-2xl text-start lg:text-left ">
                        source
                        </h2> 
                    </div>
                    <div className="block md:block lg:block item-center  gap-2 lg:items-start w-full md:w-3/4 md:w-3/4 bg-news-red">
                        <p className="text-1xl md:text-2xl lg:text-2xl my-px">Blakboi</p>
                        <p className="text-1xl md:text-2xl lg:text-2xl my-px">Bitcoin rises by 200%</p>
                        <p className="text-1xl md:text-2xl lg:text-2xl my-px">october 10, 2021</p>
                        <button type="button" className="btn btn-white 
                        border-2 border-news-white 
                        hover:bg-news-purple 
                        hover:text-news-white 
                        hover:border-news-purple
                        py-4 my-2">Read News</button>

                    </div>
                </div>
            </div>
            <div className="container flex flex-row lg:flex-row px-8 bg-news-white mb-4 gap-8 mt-14 lg:mt-0 p-4 md:p-8 lg:p-8 border-b border-news-grey ">
                <div className="h-32  md:h-44 md:h-44 
                w-20 lg:w-64 md:w-64 
                content-center align-center 
                justify-center item-center bg-news-red">
                <img src={me} alt="" className="
                w-20
                md:w-52 
                lg:w-52
                h-32
                md:h-44
                lg:h-44
                mx-auto
                "/>

                </div>
                <div className="flex flex-1 flex-col lg:flex-row item-center lg:items-start bg-new-purple ">
                   
                   <div className="flex flex-1">
                       <h2 className="capitalize text-bookmark-blue text-1xl md:text-2xl lg:text-2xl text-start lg:text-left ">
                        source
                        </h2> 
                    </div>
                    <div className="block md:block lg:block item-center  gap-2 lg:items-start w-full md:w-3/4 md:w-3/4 bg-news-red">
                        <p className="text-1xl md:text-2xl lg:text-2xl my-px">Blakboi</p>
                        <p className="text-1xl md:text-2xl lg:text-2xl my-px">Bitcoin rises by 200%</p>
                        <p className="text-1xl md:text-2xl lg:text-2xl my-px">october 10, 2021</p>
                        <button type="button" className="btn btn-white 
                        border-2 border-news-white 
                        hover:bg-news-purple 
                        hover:text-news-white 
                        hover:border-news-purple
                        py-4 my-2">Read News</button>

                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default News