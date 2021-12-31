import { API_KEY } from "./constants"

export const fetchMovies = async title => {
    const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${title}`)
    const {Search} = await response.json()
    console.log(Search)
    return Search
}

