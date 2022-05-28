import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../static/img/logo-2.png'

function navbar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} className="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" class="pull-right">
          <Nav className="me-auto">
            <Nav.Link href="#home">主页</Nav.Link>
            <Nav.Link href="#ticket">门票</Nav.Link>
            <Nav.Link href="#plan">运营</Nav.Link>
            <Nav.Link href="#qa">Q&A</Nav.Link>
            <Nav.Link href="#about">成员</Nav.Link>
            <Button variant="primary">wallet</Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default navbar;
