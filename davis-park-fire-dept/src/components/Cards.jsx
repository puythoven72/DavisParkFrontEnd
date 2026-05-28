import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useEffect, useState } from "react";
import axios from 'axios';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import NewsEventsItem from "./NewsEventsItem";
import { Link } from 'react-router-dom';
function Cards(type) {

  const [allContent, setAllContent] = useState([]);
  const [contentType, setContentType] = useState([]);

  useEffect(() => {
    setContentType(type.type);
    if (type.type === "news") {
      console.log("Getting news");
      getAllNews();
    } else {
      console.log("Getting events");
      getAllEvents();
    }
  }, []);

  //get the current events
  const getAllNews = async () => {
    await axios.get("./Content/news.json").then((res) => {
      let allnews = res.data.newsItems;
      setAllContent(allnews);
    }).catch(function (error) {
      console.log("No Current Events")
    })
  };

  //get the current events
  const getAllEvents = async () => {
    await axios.get("./Content/events.json").then((res) => {
      let allEvents = res.data.eventItems;
      setAllContent(allEvents);
    }).catch(function (error) {
      console.log("No Current Events")
    })
  };

  return (
    <>

      {
        allContent.map((news, index) => (
          <Card className="m-2">
            <Card.Header as="h5" style={{ textTransform: 'uppercase', backgroundColor: "#2c3e50", color: "white" }}>{contentType}</Card.Header>
            <Card.Body>
              <Card.Title>{news.title}</Card.Title>
              <Card.Text>
                {news.actionStatement}
              </Card.Text>
              <Button
                as={Link}
                to="/NewsEventsItem"
                state={{ itemData: news }}
                style={{ backgroundColor: "#2c3e50", color: "white" }}
              >
                Learn More
              </Button>
            </Card.Body>
          </Card>

        ))
      }

    </>
  )
}

export default Cards;