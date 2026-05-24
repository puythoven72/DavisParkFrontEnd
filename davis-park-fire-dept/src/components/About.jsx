import "../About.css"
import '../App.css'
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row"
function About() {
    return (
         <Container fluid >
         {/* <Container  > */}
            {/* <div className="about-hero">
        <img
          src="/Images/EmblemLighthouse.png"
          alt="Davis Park Fire Department 70th Anniversary Emblem"
          className="about-emblem"
        />
      </div> */}
            {/* <div className="fade-bg"></div> */}
            <Row className="aboutheroImage "></Row>
            <Container className="about-content mt-4">
                <h1 display-1 display-md-4 display-sm-6 fw-bold >
                    Welcome to the Davis Park Fire Department
                </h1>
                <hr className="title-divider" />
                <p display-1 display-md-3 display-sm-4 fw-bold >
                    Established in 1956, the Davis Park Fire Department has been keeping
                    the people and property of Davis Park and Ocean Ridge, Fire Island
                    safe for 60 years. The Department is currently comprised of
                    approximately 40 dedicated members.
                </p>
                <hr className="section-divider" />
                <p>
                    Besides battling the occasional beach-front blaze or enduring long
                    hours of training, the Department also hosts a number of events,
                    dinners, and fund-raisers throughout the year.
                </p>
                <hr className="section-divider" />
                <p className="about-highlight">Stop by the Firehouse and say hi.</p>
            </Container>
        </Container>
    );
};

export default About;