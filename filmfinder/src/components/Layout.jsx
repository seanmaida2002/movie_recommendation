import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Box from '@mui/material/Box'
import "../App.css";

export default function Layout({children}) {
  return (
    <Container>
      <Navbar className="navbar">
        <Container className="justify-content-center">
          <Navbar.Brand href="/">FilmFinder</Navbar.Brand>
        </Container>
      </Navbar>

      <Box
        component="main"
        sx={{
            flexGrow: 1,
            bgcolor: '#ffffff',
            minHeight: '100vh',
        }}
        >
            {children}
        </Box>
    </Container>
  );
}
