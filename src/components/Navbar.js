import { Button, Navbar, Container, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../static/img/logo-2.png'
import useWeb3Modal from "../hooks/useWeb3Modal"

function Nbar() {
  const { web3Modal, loadWeb3Modal, logoutOfWeb3Modal, chainId } =
    useWeb3Modal();
  console.log(chainId);
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
            {web3Modal.cachedProvider ? (
            <Nav.Link onClick={() => mintNFT()}>购买门票</Nav.Link>):(console.log(111))}
            {!web3Modal.cachedProvider ? (
              <Button variant="primary" onClick={() => loadWeb3Modal()}>Connect Wallet</Button>
            ):(
              <Button
              variant="outline-success"
              onClick={() => logoutOfWeb3Modal()}
            >
                Disconnect
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Nbar;

function mintNFT() {
  console.log("22222")
}