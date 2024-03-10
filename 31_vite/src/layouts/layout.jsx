import { Outlet, Link } from "react-router-dom";
import { Container, Navbar, Nav} from "react-bootstrap";
import '../assets/scss/common/header.scss'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/images/logo.png'


export default function Layout(){

    return <div className="page-content">
        <header>
        <Navbar expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
                        <Nav.Link as={Link} to="/favorite">Favorite</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>
        <div className="container">
            <Outlet />
        </div>
        <ToastContainer />
    </div>
}