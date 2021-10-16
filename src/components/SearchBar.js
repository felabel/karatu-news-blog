// import { useState } from 'react'


const SearchBar = () => {
   //  to add functionality to search bar
//    const [text, setText] = useState( '' )

//    const onChange = (q) => {
//        setText(q)
//        getQuery(q)
//    }
    return (
        <section className="mt-1 lg:mt-2 ">
            <div className="container flex  items-center justify-center">
                 <form>
                <input 
                   type = 'text' className='border-2  border-news-grey py-3 px-4 text-news-grey w-64 md:w-96 lg:w-96 rounded rounded-md rounded-lg focus:outline-none focus:ring-2 focus:ring-news-red focus:border-transparent'
                   placeholder = 'Search for News'
                   
                />
            </form>
            </div>
           
            
        </section>
    )
}

export default SearchBar
