import { Link } from "react-router-dom"

export default function NotFound(){
    return <div className="container">
        <h1>Error 404 - Page not found</h1>
        <Link to="/"> Go to main </Link>
    </div>
}