

import '../App.css'
import "../Home.css"
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/esm/Col';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import CardGroup from 'react-bootstrap/CardGroup';
import messageHandShake from '../assets/images/membershipHandShake.png';
import dpNews from '../assets/images/dnews.png';

function Home() {

  // 1. Initialize the navigate function
  const navigate = useNavigate();

  return (
    <Container fluid>
     
      <section className="hero ">
        <Row className=" ">
          <h1 className=" " >Protecting Davis Park Since 1956</h1>
          <p>Volunteer. Protect. Serve our community.</p>
        </Row>
      </section>

      <Container className='cards-container  d-flex justify-content-center align-items-center text-center card-offset'>
        <Row>
          <Col>
            <CardGroup>
              <Card style={{ width: '25rem' }} className="mb-2 cardHome">
                <Card.Header style={{ backgroundColor: "#2c3e50", color: "white" }}>
                  <Card.Title className="cardHeader">News & Events</Card.Title>
                </Card.Header>

                <Card.Body>
                  <Card.Text className="text-center">
                    Stay up to date with the latest news and events at the Davis Park Fire Department.
                  </Card.Text>

                  <Image src={dpNews} thumbnail />
                </Card.Body>

                <Card.Footer className="text-center">
                  <Link to="./NewsEvents">[ Explore News and Events ]</Link>
                </Card.Footer>
              </Card>

              <Card style={{ width: '25rem' }} className="mb-2 cardHome">
                <Card.Header style={{ backgroundColor: "#2c3e50", color: "white" }}>
                  <Card.Title className="cardHeader">Membership</Card.Title>
                </Card.Header>

                <Card.Body>
                  <Card.Text className="text-center">
                    Become A Member
                  </Card.Text>

                  <Image src={messageHandShake} thumbnail />
                </Card.Body>

                <Card.Footer className="text-center">
                  <Link to={"./Membership"} >
                    [Learn How To Join]
                  </Link>
                </Card.Footer>
              </Card>
            </CardGroup>

          </Col>
        </Row>

      </Container>
      {/* </div> */}
    </Container>


  )




}

export default Home;