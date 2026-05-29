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

 if (!aboutContent) {
        return <div>No about data found. Please go back to the home page.</div>;
    }

    return (
        <Container fluid className="">

            <section className="hero-about">
                <Row class="hero-about-content ">
                    <h1>About Us</h1>
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