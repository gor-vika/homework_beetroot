import { Container, Modal, Button } from "react-bootstrap"
import SearchForm from "../components/searchForm/SearchForm"
import MyCard from "../components/MyCard";
import Ratings from "../components/Ratings";
import MoviesList from "../components/MoviesList";
import { useState } from "react";
import { API_KEY } from "../config";
import '../assets/scss/main-movie-page.scss'
import { toast } from 'react-toastify';


export default function MovieResult(){
  const [favList, setFavList] = useState(JSON.parse(localStorage.getItem('fav_movie')) || [])

    const [moviesList, setMoviesList] = useState([])
    const [movieData, setMovieData] = useState(null)
    const [show, setShow] = useState(false)

    const searchHandler = async (search)=>{
      const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&type=movie`)
      const json = await response.json();
      setMoviesList(json.Search)
    }

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

    return(<>
    <div className="main-movie-page">
        <Container>
      <div className="search-form">
        <SearchForm onSearch={searchHandler} />
      </div>
      <MyCard>
        <MoviesList movies={moviesList} onDetail={detailHandler} onFav={favHandler} />
      </MyCard>
    </Container>
    </div>
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
