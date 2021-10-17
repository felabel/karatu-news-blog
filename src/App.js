import SearchBar from './components/SearchBar'
import Header from './components/Header'
import News from './components/News';
import APIContextProvider from './context';

function App() {
  return (
    <APIContextProvider>
      <div className="container w-full mx-auto bg-news-white center my-8">
        <Header />
        <SearchBar  />
        <News />
      </div>
    </APIContextProvider>
  );
}

export default App;
