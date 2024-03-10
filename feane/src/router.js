import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import AboutPage from './pages/AboutPage'
import BookTablePage from './pages/BookTablePage'

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
                path: 'menu',
                Component: MenuPage
            },
            {
                path: 'about',
                Component: AboutPage
            },
            {
                path: 'book-table',
                Component: BookTablePage
            }
        ]
    }
]) 