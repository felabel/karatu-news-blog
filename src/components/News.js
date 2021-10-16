import profile from './profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const News = () =>{
    return(
        <section class="container bg-news-white">
            <div className="container flex flex-row lg:flex-row  mb-4 gap-4 lg:gap-8 mt-14 lg:mt-0 p-4 md:p-8 lg:p-8 border-b border-news-grey">
                <div className="h-32  md:h-44 md:h-44 
                w-24 lg:w-64 md:w-64 
                content-center align-center 
                justify-center item-center ">
                <img src={profile} alt="" className="
                w-24
                md:w-52 
                lg:w-52
                h-24
                md:h-44
                lg:h-44
                mx-auto
                mt-8
                "/>

                </div>
                <div className="flex flex-1 flex-col lg:flex-row item-center lg:items-start  ">
                   
                   <div className="flex flex-1">
                       <h2 className="capitalize text-news-grey text-1xl md:text-lg lg:text-lg text-start lg:text-left ">
                        New York Times
                        </h2> 
                    </div>
                    <div className="block md:block lg:block item-center  gap-2 lg:items-start w-full md:w-3/4 md:w-3/4 tracking-wider">
                        <p className="text-sm text-news-grey md:text-2xl lg:text-lg my-px tracking-wider"><FontAwesomeIcon icon={faUser} />&nbsp; &nbsp; &nbsp;Blakboi</p>
                        <p className="text-base font-medium md:text-2xl lg:text-lg my-px text-grey tracking-wide leading-6">Bitcoin rises by 200% like it always does </p>
                        <p className="text-sm text-news-grey md:text-2xl lg:text-lg my-px tracking-wider">october 10, 2021</p>
                        <button type="button" className="btn btn-purple 
                        border-2 border-news-purple 
                        hover:bg-news-white 
                        hover:text-news-purple 
                        hover:border-news-purple
                        py-4 px-4 lg:my-2">Read News &#8594;</button>

                    </div>
                </div>
            </div>
            
            
        </section>
    )
}

export default News