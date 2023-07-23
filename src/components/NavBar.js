import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

let NavBar=()=>{
    return(
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Hang-Man</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Link className='mx-2' to="/" >Home</Link>
                    <Link className='mx-2' style={{display:"none"}} to="/game" >Restart</Link>
                    <Link className='mx-2' to="/help" >Help</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;