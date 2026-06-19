import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";

export default function Layout() {
  return (
    <Container maxwWidth="lg">
      <Navbar className="navbar">
        <Container className="justify-content-center">
          <Navbar.Brand href="/">FilmFinder</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}
