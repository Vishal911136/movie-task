import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">MOVIE TASK</Navbar.Brand>
            <Nav className="me-auto">
                <Link style={{textDecoration:'none',color:'white'}} to="/">Home</Link>
            </Nav>
            </Container>
        </Navbar>
    </>
  );
}

export default Header;