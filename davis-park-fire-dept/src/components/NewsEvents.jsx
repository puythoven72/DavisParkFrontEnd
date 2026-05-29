import "../App.css"
import "../News.css"
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/esm/Col';
import { useNavigate } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import Cards from "./Cards";
import NewsFeed from "./NewsFeed";

function NewsEvents() {
    return (
        <Container fluid>
            {/* </Container>  <Container fluid> */}
            {/* <Row className="newsheroImage "></Row> */}
            {/* <div className="fade-bg"></div> */}

            <section className="hero-news">
                <Row class="hero-content ">
                    <h1 className=" " >Latest News & Events</h1>
                    
                </Row>
            </section>

            <Row className=" ">
                <h1 className="" display-1 display-md-4 display-sm-6 fw-bold >
                    Latest News
                </h1>
            </Row>
            <hr className="title-divider" />

            <Row>
                <Cards type="news" />
            </Row>

            <hr className="section-divider" />

            <Row className="">
                <h1 className="" display-1 display-md-4 display-sm-6 fw-bold >
                    Latest Events
                </h1>
            </Row>
            <hr className="title-divider" />

            <Row>
                <Cards type="events" />
            </Row>

            <hr className="section-divider" />



            {/* <p>
                    Besides battling the occasional beach-front blaze or enduring long
                    hours of training, the Department also hosts a number of events,
                    dinners, and fund-raisers throughout the year.
                </p>
                <hr className="section-divider" />
                <p className="about-highlight">Stop by the Firehouse and say hi.</p> */}

            {/* <Row className=" ">
                <h1 className="" display-1 display-md-4 display-sm-6 fw-bold >
                    Latest News
                </h1>
            </Row>
            <hr className="title-divider" />

            <Row>
                <NewsFeed type="news" />
            </Row>

              <Row className="">
                <h1 className="" display-1 display-md-4 display-sm-6 fw-bold >
                    Latest Events
                </h1>
            </Row>
            <hr className="title-divider" />
            <Row>
                <NewsFeed type="events" />
            </Row> */}
        </Container>
    );
};

export default NewsEvents;