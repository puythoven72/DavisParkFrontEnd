import "../About.css"
import '../App.css'
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row"
import Image from "react-bootstrap/Image";
import axios from 'axios';
import { useEffect, useState } from "react";


function About() {

    const [aboutContent, setAboutContent] = useState([])

    useEffect(() => {
        getAboutContent();
    }, []);



    //get the current events
    const getAboutContent = async () => {
        
        await axios.get("./Content/about.json").then((res) => {
            let content = res.data.aboutContent[0].content;
            console.log("About content is " + content);
            setAboutContent(content);
        }).catch(function (error) {
            console.log("Add Text To About Content JSON File")
        })
    };

    return (
        <Container fluid className="">
            {/* <Container  > */}
            {/* <div className="about-hero">
        <img    
          src="/Images/EmblemLighthouse.png"
          alt="Davis Park Fire Department 70th Anniversary Emblem"
          className="about-emblem"
        />
      </div> */}
            {/* <div className="fade-bg"></div> */}
            <section class="hero-about">
                <Row class="hero-about-content ">

                </Row>
            </section>
            <Row className="">
                <h1 display-1 display-md-4 display-sm-6 fw-bold >
                    Welcome to the Davis Park Fire Department
                </h1>
                <hr className="title-divider" />
                <p display-1 display-md-3 display-sm-4 fw-bold >
                   
                   {aboutContent}
                </p>
                <hr className="section-divider" />
                
                <p className="about-highlight">Stop by the Firehouse and say Hi!</p>
            </Row>
        </Container>
    );
};

export default About;