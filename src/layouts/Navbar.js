import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link } from 'react-router-dom';
import FooterPagina from "./Footer";
import logo from "../images/simboloMedicina.jpg"


const NavBarJorge = () => {
  return (
    <>
    <div className="contenedor bg-dark justify-content-between">
    
      <Navbar className="navBar" variant="dark" expand="lg">
        <Container>
        <Navbar.Brand as={Link} to="/" >
             <img alt="logo"src={logo} className="imagenLogo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fw-bold fs-5">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/SobreMi">Sobre Mi</Nav.Link>
            <Nav.Link as={Link} to="/PreguntasFrecuentes">Preguntas Frecuentes</Nav.Link>
            <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link>
           
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>  

      <section>
        <Outlet></Outlet>
      </section>

      <FooterPagina/>
      
    </div>
    </>
  );
}

export default NavBarJorge;