import Card from "react-bootstrap/Card"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import '../assets/scss/main-movie-page.scss'

export default function MovieItem({item, onDetail, onFav}){

    const favIcon = (JSON.parse(localStorage.getItem('fav_movie')) || [])
    .find(el => el.imdbID === item.imdbID) 
    ? 
    <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#9e2dc8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#9e2dc8"></path> </g></svg> 
    : 
    <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#9e2dc8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path> </g></svg>
   
    return <Card className="movie-card">
        <Card.Img className="movie-poster" variant="top" src={item.Poster} alt={item.Title} />
        <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title className="movie-title">
                <Link to={`/movie/${item.imdbID}`}>{item.Title}</Link>
            </Card.Title>
            <Card.Text>
                <b>Year:</b> {item.Year}
            </Card.Text>
            <div className="movie-btn-container">
                <Button variant="transparent" onClick={()=> {onDetail(item.imdbID)}}>
                    <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_429_11160)"> <circle cx="12" cy="11.9999" r="9" stroke="#9e2dc8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></circle> <rect x="12" y="8" width="0.01" height="0.01" stroke="#9e2dc8" stroke-width="3.75" stroke-linejoin="round"></rect> <path d="M12 12V16" stroke="#9e2dc8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11160"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
                </Button>
                <Button variant="transparent" className="btn-fav" onClick={()=>{onFav(item)}}>{favIcon}
                </Button>
            </div>
        </Card.Body>
    </Card>
}