// context API 
// context hooks

// context 
// Provider
// Consumer

import React, {useContext, useEffect, useState} from 'react'

// console.log(import.meta.env.VITE_API_KEY);



export const API_URL = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`
// const API_URL = `https://www.omdbapi.com/?apikey=4fd1ca08&s=titanic`
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const [isError, setIsError] = useState({show: false, msg: ''})
    const [query, setQuery] = useState('titanic')
    const getMovies = async (url) => {
        try{
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            if(data.Response === "True"){
                setIsLoading(false)
                setMovies(data.Search)
                setIsError({
                    show: false, 
                    msg: ''
                })
            }else{
                setIsLoading(true)
                setIsError({
                    show: true, 
                    msg: data.Error
                })
            }
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
       let timerOut = setTimeout(() => {
            getMovies(`${API_URL}&s=${query}`)
        }, 800)
        return () => clearTimeout(timerOut)
    }, [query])
    return <AppContext.Provider value={{isLoading, movies, isError, query, setQuery}}> {children}</AppContext.Provider>
}

// make the context global
const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }