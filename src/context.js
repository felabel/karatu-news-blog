import { createContext, useContext, useEffect, useState } from "react";
import Axios from "axios";

export const APIContext = createContext();

function APIContextProvider({ children }) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState("Apple");
    useEffect(() => {
        const getData = async () => {
            const res = await Axios.get(`https://newsapi.org/v2/everything?q=${query}&pageSize=100&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
            setData(res.data.articles);
            setIsLoading(false)
        }
        getData();
    }, [query]);

    return (
        <APIContext.Provider value={{ data, isLoading,query, setQuery }}>
            {children}
        </APIContext.Provider>
    )

}
export default APIContextProvider;




export function useAPI() {
    const context = useContext(APIContext);
    if (context === undefined) {
        throw new Error("Context must be within Provider");
    }
    return context;
}