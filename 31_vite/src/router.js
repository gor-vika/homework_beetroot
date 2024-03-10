import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/layout.jsx'
import HomePage from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import MoviePage from './pages/MoviePage.jsx'
import MainMoviePage from './pages/MainMoviePage.jsx'
import Favorites from './pages/Favorites.jsx'


export default createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage
      },
      {
        path: 'movies',
        Component: MainMoviePage
      },
      {
        path: 'favorite',
        Component: Favorites
      },
      {
        path: 'movie/:imdbID',
        Component: MoviePage
      }
    ]
  },
  {
    path: '*',
    Component: NotFound
  }
])