import { useState } from "react"
import { Row, Form } from "react-bootstrap"
import './../../assets/scss/main-movie-page.scss'

export default function SearchForm({onSearch}){
    const [search, setSearch] = useState(null)

    function submitHandler(e){
        e.preventDefault()
        onSearch(search)
    }
    return <Form onSubmit={submitHandler}> 
                <Row>
                    <div className="search">
                        <input className="search-input" type="text" placeholder="search movies , series , anime etc " onChange={(e) => setSearch(e.target.value)} value={search}/> 
                        <button className="custom-btn" type="submit">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_335)">
                            <path d="M22.8105 20.6895L17.0775 14.9565C18.3904 13.1117 18.9621 10.841 18.6795 8.59447C18.3968 6.34794 17.2803 4.28963 15.5514 2.82759C13.8225 1.36554 11.6073 0.606506 9.34501 0.700948C7.08274 0.79539 4.93854 1.73642 3.33748 3.33748C1.73642 4.93854 0.79539 7.08274 0.700948 9.34501C0.606506 11.6073 1.36554 13.8225 2.82759 15.5514C4.28963 17.2803 6.34794 18.3968 8.59447 18.6795C10.841 18.9621 13.1117 18.3904 14.9565 17.0775L20.6895 22.8105C20.9724 23.0837 21.3513 23.2349 21.7446 23.2315C22.1379 23.2281 22.5141 23.0703 22.7922 22.7922C23.0703 22.5141 23.2281 22.1379 23.2315 21.7446C23.2349 21.3513 23.0837 20.9724 22.8105 20.6895ZM2.25001 9.75001C2.25001 8.26665 2.68987 6.8166 3.51398 5.58323C4.33809 4.34986 5.50943 3.38857 6.87988 2.82091C8.25033 2.25325 9.75833 2.10473 11.2132 2.39412C12.668 2.68351 14.0044 3.39781 15.0533 4.44671C16.1022 5.4956 16.8165 6.83197 17.1059 8.28683C17.3953 9.74169 17.2468 11.2497 16.6791 12.6201C16.1114 13.9906 15.1502 15.1619 13.9168 15.986C12.6834 16.8101 11.2334 17.25 9.75001 17.25C7.76155 17.2478 5.85517 16.4569 4.44912 15.0509C3.04307 13.6448 2.25219 11.7385 2.25001 9.75001Z" fill="#212121"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1_335">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </button>   
                    </div>
                </Row>
                    
                </Form>
}