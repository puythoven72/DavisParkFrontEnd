import React from 'react';
import NewsCard from './NewsCard';
import { useEffect, useState } from "react";
import axios from 'axios';
import Container from 'react-bootstrap/esm/Container';

// Main News Feed Component
const NewsFeed = (type) => {

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
    <div className="max-w-5xl mx-auto px-4 py-12">
      {
        allContent.map((news, index) => (
          <NewsCard
            title={news.title}
            date=""
            category=""
            actionText={news.content}
          >
            {/* Stop by the post office or the fire house to purchase our official 2024 Fire Department T-shirts. Thank you for your continued support! */}
          </NewsCard>
        ))
      }
    </div>

  )
}


export default NewsFeed;