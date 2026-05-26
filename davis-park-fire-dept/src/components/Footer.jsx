import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';

function Footer() {



    return (
        <>
            <div className="w-100 " style={{ borderBottom: "3px solid red" }}></div>
            <Container fluid className='pt-3 ' style={{ backgroundColor: "#2c3e50", color: "white" }}>
                {/* <Row> */}
                    {/* <Image src="Images/dpfd_head.jpg" thumbnail /> */}
                    {/* <Row className="d-flex justify-content-center align-items-center text-center"><strong>Davis Park Fire Deptartment</strong></Row>
                </Row> */}

                <Row className="d-flex justify-content-center align-items-center text-center">
                    <Col >

                        <Row className="d-flex justify-content-center align-items-center text-center"><strong>Fire House Phone:</strong>📞(631) 597-6024</Row>
                        <Row className="d-flex justify-content-center align-items-center text-center"><strong>Fax:</strong> (631) 597-2060</Row>
                    </Col>
                    <Col>
                    <Row className="d-flex justify-content-center align-items-center text-center"><strong>Check us on Facebook</strong></Row>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="red"
                            viewBox="0 0 16 16"
                        >
                            <path d="M12.5 0h-9A3.5 3.5 0 0 0 0 3.5v9A3.5 3.5 0 0 0 3.5 16h4.7v-5.5H6V8h2.2V6.2c0-2.2 1.3-3.4 3.3-3.4.7 0 1.4.1 2 .2v2.3h-1.4c-1.1 0-1.3.5-1.3 1.2V8h2.6l-.4 2.5h-2.2V16h2.7A3.5 3.5 0 0 0 16 12.5v-9A3.5 3.5 0 0 0 12.5 0z" />
                        </svg>
                    </Col>
                    <Col  >
                        <Row className="d-flex justify-content-center align-items-center text-center"><strong>Email:</strong>✉️Secretary@davisparkfd.org</Row>

                    </Col>
                </Row>

            </Container>
        </>
    )



}
export default Footer