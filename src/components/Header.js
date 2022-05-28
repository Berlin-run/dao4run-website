import { Collapse } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Header() {
  return (
    <header>
      <Container className='title text-center' id="home">
        <h1>润学研究所</h1>
      </Container>
    </header>
  );
}
export default Header;
