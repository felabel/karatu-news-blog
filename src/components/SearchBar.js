import { useAPI } from '../context';


const SearchBar = () => {
    const { query, setQuery } = useAPI();
    return (
        <section className="mt-1 lg:mt-2 lg:mb-8 ">
            <div className="container flex  items-center justify-center">
                <form>
                    <input
                        autoFocus
                        type='text' className='border-2  border-news-grey py-3 px-4 text-news-grey w-64 md:w-96 lg:w-96 rounded rounded-md rounded-lg focus:outline-none focus:ring-2 focus:ring-news-red focus:border-transparent'
                        placeholder='Search for News'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </form>
            </div>


        </section>
    )
}

export default SearchBar
