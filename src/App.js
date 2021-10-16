import SearchBar from './components/SearchBar'
import Header from './components/Header'
import News from './components/News'
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  // const [items, setItems] = useState([])
  useEffect(() => {
    const fetchNews = async () => {
      const result = await axios({
        method:'POST',
        url:'https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything',
        // mode: 'no-cors',

        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          'content-type':'application/json',
          Authorization: process.env.REACT_APP_NEWS_API_KEY
        }
        ,

      
      })
      // .then((result) => result.json())
      console.log(result)
      console.log(result.data)
      // setItems(result.data)
    }
    fetchNews()
  })
  return (
    <div className="container w-full mx-auto bg-news-white center shadow-2xl my-8">
      < Header />
      < SearchBar />
      < News />

      
    </div>
  );
}

export default App;
