
import MovieItem from "./MovieItem"

export default function FavList({movies, onDetail, onFav}){
    return <div className="card-body" id="fav-movies">
        {movies.map(item => <MovieItem item={item} key={item.imdbID} onDetail={onDetail} onFav={onFav} />)}
        </div>
}