import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import '../Navigation.css'

function NavigationComponent() {
  return (
  <>
      <Navbar collapseOnSelect expand="lg" className=" navbar" style={{ backgroundColor: "#2c3e50", color: "white" }} >
        <Container fluid style={{ backgroundColor: "#2c3e50" }}>
          <Navbar.Brand  href="/">
            <img src="Images/logo1.png" alt="Logo" style={{ width: "80px", height: "80px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{color: 'red'}} />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="me-auto navText" style={{ color: "#ffff" }} >
              <Nav.Link href="/" style={{ color: "#ffff" }} >Home</Nav.Link>
              <Nav.Link href="/About" style={{ color: "#ffff" }} >About</Nav.Link>
              <Nav.Link href="/NewsEvents" style={{ color: "#ffff" }}>News & Events</Nav.Link>
              <Nav.Link href="/Membership" style={{ color: "#ffff" }} >Membership</Nav.Link>
              <Nav.Link href="/Contact" style={{ color: "#ffff" }} >Contact</Nav.Link>
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
