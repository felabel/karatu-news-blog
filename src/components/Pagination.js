import React from 'react'

const Pagination = () => {
    return (
        <div className="py-2">
            <div className="flex item-center justify-center py-2">
                     <p className="text-sm text-gray-700">
                    Showing
                    <span className="font-medium">
                        1
                    </span>
                    to
                    <span className="font-medium">
                        10
                    </span>
                    of
                    <span className="font-medium">
                        100
                    </span>
                    results
                </p>
                </div>
            <div className="flex item-center justify-center">
                
               
                <nav className="block px-2">
                    <ul className="flex pl-0 rounded list-none flex-wrap gap-2">
                        <li><a href="!#" className="bg-news-white border-news-purple text-news-red-500 hover:bg-news-blue rounded-full relative inline-flex items-center px-4 py-2 border text-sm font-medium">1</a></li>
                        <li><a href="!#" className="bg-news-white border-news-purple text-news-red-500 hover:bg-news-blue rounded-full relative inline-flex items-center px-4 py-2 border text-sm font-medium">2</a></li>
                        <li><a href="!#" className="bg-news-white border-news-purple text-news-red-500 hover:bg-news-blue rounded-full relative inline-flex items-center px-4 py-2 border text-sm font-medium">3</a></li>
                        <li><a href="!#" className="bg-news-white border-news-purple text-news-red-500 hover:bg-news-blue rounded-full relative inline-flex items-center px-4 py-2 border text-sm font-medium">4</a></li>
                        <li><a href="!#" className="bg-news-white border-news-purple text-news-red-500 hover:bg-news-blue rounded-full relative inline-flex items-center px-4 py-2 border text-sm font-medium">5</a></li>
                        <li><a href="!#" className="bg-news-white border-news-purple text-news-red-500 hover:bg-news-blue rounded-full relative inline-flex items-center px-4 py-2 border text-sm font-medium">6</a></li>
                        <li><a href="!#" className="bg-news-white border-news-purple text-news-red-500 hover:bg-news-blue rounded-full relative inline-flex items-center px-4 py-2 border text-sm font-medium">7</a></li>
                        <li><a href="!#" className="bg-news-white border-news-purple text-news-red-500 hover:bg-news-blue rounded-full relative inline-flex items-center px-4 py-2 border text-sm font-medium">8</a></li>
                        <li><a href="!#" className="bg-news-white border-news-purple text-news-red-500 hover:bg-news-blue rounded-full relative inline-flex items-center px-4 py-2 border text-sm font-medium">9</a></li>
                        <li><a href="!#" className="bg-news-white border-news-purple text-news-red-500 hover:bg-news-blue rounded-full relative inline-flex items-center px-4 py-2 border text-sm font-medium">10</a></li>
                    </ul>
                </nav>
            </div>
            
        </div>
    )
}

export default Pagination
