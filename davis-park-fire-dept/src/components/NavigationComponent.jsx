import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import { Link } from 'react-router-dom'
import '../Navigation.css'
import { HiMenu } from 'react-icons/hi'; // Import a hamburger icon
import logo from '../assets/images/logo1.png'; 

function NavigationComponent() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className=" navbar" style={{ backgroundColor: "#2c3e50", color: "white" }} >
        <Container fluid style={{ backgroundColor: "#2c3e50" }}>
          <Navbar.Brand href="/">
            <img src={logo} alt="Davis Park Logo" style={{ width: "80px", height: "80px" }} />
          </Navbar.Brand>
         
          {/* Pass your custom styled icon inside the Toggle */}
         <Navbar.Toggle aria-controls="responsive-navbar-nav"  >
          <HiMenu style={{ color: '#ff6b6b', fontSize: '1.8rem' }} />
        </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="me-auto navText" style={{ color: "#ffff" }} 
              onSelect={() => document.activeElement.blur()}    
            >
             
              <Nav.Link as={Link} to="/" eventKey="home" style={{ color: "#ffff" }}>Home</Nav.Link>
              <Nav.Link as={Link} to="/About" eventKey="about" style={{ color: "#ffff" }}>About</Nav.Link>
              <Nav.Link as={Link} to="/NewsEvents" eventKey="news" style={{ color: "#ffff" }}>News & Events</Nav.Link>
              <Nav.Link as={Link} to="/Membership" eventKey="membership" style={{ color: "#ffff" }}>Membership</Nav.Link>
              <Nav.Link as={Link} to="/Contact" eventKey="contact" style={{ color: "#ffff" }}>Contact</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown" style={{  color: "#ffff" }}>
              <NavDropdown.Item href="#action/3.1" style={{  color: "#ffff" }}>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={{  color: "#ffff" }}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" style={{  color: "#ffff" }}>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" style={{  color: "#ffff" }}>
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            {/* <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="w-100 " style={{ borderBottom: "3px solid red" }}></div>
    </>
  );
}

export default NavigationComponent;
