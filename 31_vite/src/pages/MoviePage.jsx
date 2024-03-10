import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { API_KEY } from "../config"
import { Link } from "react-router-dom"
import Ratings from "../components/Ratings"
import '../assets/scss/movie-detail.scss'


export default function MoviePage(){
    const params = useParams()
    const [movieData, setMovieData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = async()=>{
        try{
            const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${params.imdbID}`)
        
        if (!response.ok){
            throw new Error('Failed to fetch movie data')
        }
        const json = await response.json();
        setMovieData(json)
    } catch (error){
        setError(error.message)
    } finally {
        setLoading(false)
    }
    }

    useEffect(()=>{
        fetchData()
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
    <div className="container movie-page" style={{backgroundImage:`url(${movieData.Poster})`}}>
        {movieData && (
            <>
          <div className="d-flex">
          <div className="pic">
            <img src={movieData.Poster} alt={movieData.Title} />
            <Link className="link-before" to="/movies">&larr;</Link>
          </div>
          <div className="content">
            <h1>{movieData.Title}</h1>
            <ul>
                <li>
                    <b>Year:</b> {movieData.Year}  
                </li>
                <li>
                    <b>Genre:</b> {movieData.Genre}
                </li>
                
            </ul>
            <Ratings ratings={movieData.Ratings} />
            <p>{movieData.Plot}</p>
            
          </div>
        </div>
        </> 
        )}
    </div>
    )
}