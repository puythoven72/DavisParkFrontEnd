import { Button } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from "react";
import Input from 'react-phone-number-input/input'
import Form from 'react-bootstrap/Form';
//import emailjs from 'emailjs-com';
import "../App.css";
import Alert from 'react-bootstrap/Alert';
import { useLocation } from 'react-router-dom';
import "../Contact.css";

// const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
// const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
// const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;



function Contact(props) {
    const location = useLocation();

    const [value, setValue] = useState("");
    //used for messages
    const [submitStatus, setSubmitStatus] = useState(null);
    const [messageDisplay, setMessageDisplay] = useState("");
    const [alertVariant, setAlertVariant] = useState("");
    const [contactTitle, setContactTitle] = useState("Contact Us");
    const [isRSVP, setIsRSVP] = useState(false);
    const [rsvpMessage, setRsvpMessage] = useState("");

    const [rsvpStartHour, setRsvpStartHour] = useState(0);
    const [rsvpStartMin, setRsvpStartMin] = useState(0);
    const [rsvpEndHour, setRsvpEndHour] = useState(0);
    const [rsvpEndMin, setRsvpEndMin] = useState(0);

    const [validated, setValidated] = useState(false);
    const successMessage = "Success - Your Message Has Been Successfully Submitted";
    const errorPhone = "Error - Invalid Phone Number";
    const errorMessage = "Error - Your Form Has Not Been Submitted. Something Went Wrong!";

    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {



    }, [submitStatus, props.navigation]);





    const displayMessage = () => {
        switch (submitStatus) {
            case "success":
                setAlertVariant("success");
                setMessageDisplay(successMessage);
                break;
            case "errorPhone":
                setAlertVariant("danger");
                setMessageDisplay(errorPhone);
                break;
            case "error":
                setAlertVariant("danger");
                setMessageDisplay(errorMessage);
                break;

        }
    }

    const clearMessage = () => {
        setSubmitStatus(null);
    };


    const handleOnSubmit = (e) => {
        e.preventDefault();
        setValidated(false);

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {

                setSubmitStatus("success")
            }, (error) => {
                console.log(error.text);
                setSubmitStatus('error')
            });

        e.target.reset();
        setValue("");
    };




    //This will validate Contact Fields
    const validateContact = (event) => {
        const form = event.currentTarget;
        // Check Phone Is valid, or empty
        const validPhone = validatePhone(form.phone.value);
        if (!validPhone) {
            setSubmitStatus("errorPhone");
        }

        //Check required fields
        if (form.checkValidity() === false || !validPhone) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        } else {
            handleOnSubmit(event);
        }
    }

    //check if this is a RSVP or a Contact
    const validateInput = (event) => {

        if (isRSVP) {
            validateRSVP(event);
        } else {
            validateContact(event);
        }
    };

    //If phone number is entered , do some loose validation
    const validatePhone = (phone) => {

        if (phone.length > 0 && phone.length < 14) {
            return false;
        } else {
            return true;
        }
    };

    return (
     <Container fluid>
        <section class="hero-form">
          <Row class="hero-content ">
                <h1 className="  " >Contact Us</h1>

                {/* <Button className="border border-3 " onClick={() => navigate('/About')} variant size="lg" active>
              <span className="heroButton">Learn More</span>
            </Button> */}
            </Row>

        </section>
        <div className="form-hero mb-2">
            {/* <Container>
                <Row className=" ">
                    <Col className="">
                        <h1 className="splashTitle ">
                            {contactTitle}
                        </h1>
                    </Col>
                </Row>
            </Container> */}
            <div className=" ">
                {submitStatus != null ?
                    <Alert key={alertVariant} variant={alertVariant} className="mt-2">
                        {messageDisplay}
                    </Alert>
                    : null
                }
            </div>
            < Container className="" >

                <Row className="">
                    <Form onSubmit={validateInput} noValidate validated={validated} className="mt-1 formBackround" style={{ borderRadius: '15px', border: '1px solid red' }}>

                        <Form.Group className="m-3" controlId="from_name">
                            <span style={{ color: "red" }}>*</span>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text"
                                placeholder="Enter Name"
                                required
                                name='from_name'
                                minLength="3"
                                maxLength="30"
                            />

                            <Form.Control.Feedback type="invalid">
                                Please Enter Your Name.
                            </Form.Control.Feedback>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="m-3" controlId="from_email">
                            <span style={{ color: "red" }}>*</span>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email"
                                placeholder="Enter Email"
                                required
                                name='from_email'
                                maxLength="30"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please Enter Your E-Mail.
                            </Form.Control.Feedback>
                            <small><small>
                                We'll never share your email with anyone else.
                            </small>
                            </small>

                        </Form.Group>
                        {
                            !isRSVP ?

                                (<Form.Group className="m-3" controlId="phone">
                                    <Form.Label>
                                        Phone Number
                                    </Form.Label>
                                    <Row>
                                        <Input
                                            className='rounded'
                                            placeholder="Enter Phone Number (Optional)"
                                            value={value}
                                            onChange={setValue}
                                            name='phone'
                                            country="US"
                                            maxLength="14"
                                            minLength="14"
                                        />

                                    </Row>

                                </Form.Group>
                                ) : (null)
                        }
                        {
                            /* react-datepicker
                            The MIT License (MIT)
    
                            Copyright (c) 2014-2025 HackerOne Inc and individual contributors
    
                            Permission is hereby granted, free of charge, to any person obtaining a copy
                            of this software and associated documentation files (the "Software"), to deal
                            in the Software without restriction, including without limitation the rights
                            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                            copies of the Software, and to permit persons to whom the Software is
                            furnished to do so, subject to the following conditions:
    
                            The above copyright notice and this permission notice shall be included in all
                            copies or substantial portions of the Software.
    
                            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                            SOFTWARE. */
                        }

                        <Form.Group className="m-3" controlId="message">
                            <Form.Label><span style={{ color: "red" }}>*</span>Message (500 Characters).</Form.Label>
                            <Form.Control as="textarea" rows={3}
                                required={isRSVP ? false : true}
                                name='message'
                                readOnly={isRSVP ? true : false}
                                maxLength="500"
                                placeholder="Enter Message"

                            />
                            <Form.Control.Feedback type="invalid">
                                Please Enter Your Message.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Row >
                            <Col className="d-flex align-items-center justify-content-center text-center hero-buttons">
                                <Button variant="" type="submit" className="mb-5  " size="lg" style={{ borderRadius: '15px', border: '1px solid white', color: "white" }}>
                                    SUBMIT
                                </Button>
                            </Col>
                        </Row>

                    </Form>
                </Row>

            </Container>
        </div>
    </ Container>  
    );

}
export default Contact;