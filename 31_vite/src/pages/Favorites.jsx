import MyCard from "../components/MyCard"
import FavList from "../components/FavList"
import { useState } from "react"
import { Modal, Button } from "react-bootstrap"
import { API_KEY } from "../config"
import Ratings from "../components/Ratings"
import '../assets/scss/favorites.scss'
import '../assets/scss/main-movie-page.scss'
import { toast } from 'react-toastify';



export default function FavoriteMovies(){
  const [favList, setFavList] = useState(JSON.parse(localStorage.getItem('fav_movie')) || [])
  const [show, setShow] = useState(false)
  const [movieData, setMovieData] = useState(null)

  const detailHandler = async (id) => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      const json = await response.json();
      console.log(json);
      setMovieData(json)
      setShow(true)
  }

  const favHandler = (item) => {
    const list = JSON.parse(localStorage.getItem('fav_movie')) || []
      const index = list.findIndex((el) => el.imdbID === item.imdbID)
      if (index === -1){
          list.push(item)  
          toast.success('Фільм додано до обраних!');  
      } else {
          list.splice(index, 1)
          toast.info('Фільм видалено із обраних!');
      }
      localStorage.setItem('fav_movie', JSON.stringify(list))
      setFavList(list)
  }
    
    return (<>
    <MyCard className="fav-movies">
      <FavList movies={Object.values(favList)} onDetail={detailHandler} onFav={favHandler}/>
    </MyCard>
    <Modal show={show} onHide={()=>{setShow(false)}}>
    <Modal.Header closeButton>
  <Modal.Title>{movieData && movieData.Title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {movieData && (<>
        <div className="d-flex mini-info">
        <div className="pic">
          <img src={movieData.Poster} alt={movieData.Title} />
        </div>
        <div className="content">
        
          <p>{movieData.Plot}</p>
          <Ratings ratings={movieData.Ratings} />
        </div>
      </div>
      </>
      )} 
    </Modal.Body>
    <Modal.Footer>
      <Button variant='secondary' onClick={()=>{setShow(false)}}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  </>  
    )
}