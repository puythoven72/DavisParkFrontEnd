

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

function Home() {

  // 1. Initialize the navigate function
  const navigate = useNavigate();

  return (
    <Container fluid>
      {/* 1. Hero Section */}
      {/* <Row className="heroImage ">
        <Row className="">
          <Col>
            <Image src="Images/dpfdHeader.png" className="img-fluid"    />
          </Col>
        </Row>
        <Row className=""
        >
          <Col className="">
            <h1 className=" heroContent" >Protecting Davis Park Since 1956</h1>
            <h4 className="heroContentSub">
              Keeping  Davis Park and Ocean Ridge, Fire Island safe for 60 years.
            </h4>
            <Button className="border border-3 " onClick={() => navigate('/About')} variant size="lg" active>
              <span className="heroButton">Learn More</span>
            </Button>
          </Col>

        </Row>
      </Row> */}
      <section class="hero">
        <Row class="hero-content ">
          <h1 className=" " >Protecting Davis Park Since 1956</h1>
          <p>Volunteer. Protect. Serve our community.</p>
            {/* <Button className="border border-3 " onClick={() => navigate('/About')} variant size="lg" active>
              <span className="heroButton">Learn More</span>
            </Button> */}
        </Row>
       
      </section>

      <Container className='cards-container  d-flex justify-content-center align-items-center text-center card-offset'>
        <Row>
          <Col>
            <CardGroup>
              <Card
                style={{ width: '25rem' }}
                className="mb-2 cardHome"
              >
                <Card.Header style={{ backgroundColor: "#2c3e50", color: "white" }}>
                  <Card.Title className="cardHeader"> News & Events </Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <Row>
                      Stay up to date with the latest news and events at the Davis Park Fire Department.
                    </Row>

                  </Card.Text>
                  <Image src="Images/dnews.png" thumbnail />
                  <Row>
                    <Link to={"./NewsEvents"} >
                      [Explore News and Events ]
                    </Link>
                  </Row>
                </Card.Body>
              </Card>
              <Card
                style={{ width: '25rem', }}
                className="mb-2 cardHome"
              >
                <Card.Header style={{ backgroundColor: "#2c3e50", color: "white" }}>
                  <Card.Title className="cardHeader">Membership</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <Row>
                      Become A Member

                    </Row>
                  </Card.Text>
                  <Image src="Images/membership.png" thumbnail />
                  <Row>
                    <Link to={"./Membership"} >
                      [Learn How To Join]
                    </Link>
                  </Row>
                </Card.Body>
              </Card>
            </CardGroup>

            {/* <Card
              style={{ width: '25rem' }}
              className="mb-2 cardHome"
            >
              <Card.Header style={{ backgroundColor: "#2c3e50", color: "white" }}>
                <Card.Title className="cardHeader"> News & Events </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <Row>
                    Stay up to date with the latest news and events at the Davis Park Fire Department.
                  </Row>
                  <Row>
                    <Link to={"./NewsEvents"} >
                      [Explore News and Events ]
                    </Link>
                  </Row>

                </Card.Text>
                <Image src="Images/dnews.png" thumbnail />
              </Card.Body>
            </Card>
          </Col>


          <Col>
            <Card
              style={{ width: '25rem', }}
              className="mb-2 cardHome"
            >
              <Card.Header style={{ backgroundColor: "#2c3e50", color: "white" }}>
                <Card.Title className="cardHeader">Membership</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <Row>
                    Become A Member

                  </Row>
                  <Row>
                    <Link to={"./NewsEvents"} >
                      [Learn How To Join]
                    </Link>
                  </Row>

                </Card.Text>
                <Image src="Images/membership.png" thumbnail />
              </Card.Body>
            </Card> */}

          </Col>
        </Row>



      </Container>
      {/* </div> */}
    </Container>


  )




}

export default Home;