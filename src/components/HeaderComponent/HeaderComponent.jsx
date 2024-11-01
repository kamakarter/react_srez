import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">МышьГлавОпт</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Главная</Nav.Link>
            <Nav.Link href="#features">Каталог</Nav.Link>
            <Nav.Link href="#contacts">Контакты</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}