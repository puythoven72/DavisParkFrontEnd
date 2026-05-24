import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useEffect, useState } from "react";
import axios from 'axios';
import Container from 'react-bootstrap/esm/Container';


function Cards(type) {

  const [allContent, setAllContent] = useState([]);
  const [contentType, setContentType] = useState([]);

  useEffect(() => {
    console.log("type is " + type.type);
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
    await axios.get("/Content/news.json").then((res) => {
      let allnews = res.data.newsItems;
      setAllContent(allnews);
    }).catch(function (error) {
      console.log("No Current Events")
    })
  };

  //get the current events
  const getAllEvents = async () => {
    await axios.get("/Content/events.json").then((res) => {
      let allEvents = res.data.eventItems;
      setAllContent(allEvents);
    }).catch(function (error) {
      console.log("No Current Events")
    })
  };

  return (

    <CardGroup className="">

      {
        // allEvents.length !== 0 ?

        allContent.map((news, index) => (


          <Card style={{  }}
              className="m-2 cardHome">
            <Card.Img variant="top" src={news.image} />
            <Card.Body >
              <Card.Title className="" style={{ backgroundColor: "#2c3e50", color: "white" }}>{news.title}</Card.Title>
              <Card.Text className="" >
                {news.content}
              </Card.Text>
            </Card.Body>

          </Card>
        ))
      }



    </CardGroup>

  );
}

export default Cards;