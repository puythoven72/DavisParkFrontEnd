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
import "../News.css"
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';



function NewsEventsItem() {
    const location = useLocation();

    // Access the itemData safely using optional chaining (?.) in case a user navigates here directly
    const newsItem = location.state?.itemData;

    if (!newsItem) {
        return <div>No news data found. Please go back to the home page.</div>;
    }

    return (
        <Container>
            <Row className="newsheroImage "></Row>
            <Row className="m-2">
                <Card style={{}}>

                    <Image src={newsItem.image} thumbnail style={{ width: '18rem' }} className="mx-auto d-block mt-2   " />
                    <Card.Body>
                        <Card.Title>{newsItem.title}</Card.Title>
                        <hr className="title-divider" />
                        <Card.Text>
                            {newsItem.content}
                        </Card.Text>

                    </Card.Body>
                </Card>

            </Row>
            <Row>
                <Link to={"../NewsEvents"} >
                    [Back to News & Events]
                </Link>
            </Row>


        </Container >
    );
}

export default NewsEventsItem;