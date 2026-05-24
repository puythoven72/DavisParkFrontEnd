

import '../App.css'
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/esm/Col';
import { useNavigate } from 'react-router-dom';

function Home() {

 // 1. Initialize the navigate function
  const navigate = useNavigate();

  return (
    <Container fluid>
      {/* 1. Hero Section */}
      <Row className="heroImage ">
        <Row className="">
          <Col>
            <Image src="Images/dpfdHeader.png" className="img-fluid" />
          </Col>
        </Row>
        <Row className="heroContent" style={{
          color: '#0b1a33',
          WebkitTextStroke: '1px white'
        }}>
          <Col>
            <h1 className="display-1 display-md-3 display-sm-4 fw-bold heroText" >Protecting Davis Park Since 1956</h1>
            <h3 className="fs-2 fs-md-3 fs-sm-5 mt-3 heroText">
              Keeping the people and property of Davis Park and Ocean Ridge, Fire Island safe for 60 years.
            </h3>
            <Button className="border border-3" onClick={() => navigate('/About')} variant size="lg" active>
              <>Learn More</>
            </Button>
          </Col>

        </Row>
      </Row>


      <Container className='cards-container d-flex justify-content-center align-items-center text-center'>

        <Row>
          <Col>
            <Card
              style={{ width: '25rem' }}
              className="mb-2"
            >
              <Card.Header style={{ backgroundColor: "#2c3e50", color: "white" }}>
                <Card.Title className="cardHeader"> News & Events </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Find out more about our news
                </Card.Text>
                <Image src="Images/dnews.png" thumbnail />
              </Card.Body>
            </Card>
          </Col>


          <Col>
            <Card
              style={{ width: '25rem', }}
              className="mb-2"
            >
              <Card.Header style={{ backgroundColor: "#2c3e50", color: "white" }}>
                <Card.Title className="cardHeader">Membership</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Become a member
                  Learn how to join
                </Card.Text>
                <Image src="Images/membership.png" thumbnail />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* </div> */}
    </Container>


  )




}

export default Home;