

import '../App.css'
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/esm/Col';

function Home() {


  return (
    <Container fluid>
      {/* 1. Hero Section */}
      <section className="hero">
        <div className="" style={{
          color: '#2C3E50',
          WebkitTextStroke: '1px white'
        }}>
          <div> <Image src="Images/dpfdHeader.png" className="img-fluid"/></div>
          <h1 style={{
            fontSize: "3rem"
          }}>Protecting Davis Park Since 1956</h1>
          <h3 style={{
            fontSize: "2rem"
          }}>
            Keeping the people and property of Davis Park and Ocean Ridge, Fire Island safe for 60 years.
          </h3>
          <Button className="border border-3" variant size="lg" active>
            <span style={{
              fontSize: "1rem"
            }}>Learn More</span>
          </Button>
        </div>
      </section>

      {/* 2. Overlapping Cards Container */}
      {/* <div className="cards-container"> */}
      <Container className='cards-container d-flex justify-content-center align-items-center text-center'>

        <Row>
          <Col>
            <Card
              style={{width: '25rem'}}
              className="mb-2"
            >
              <Card.Header style={{ backgroundColor: "#2c3e50", color: "white" }}>
                <Card.Title> News & Events </Card.Title>
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
                <Card.Title>Membership</Card.Title>
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