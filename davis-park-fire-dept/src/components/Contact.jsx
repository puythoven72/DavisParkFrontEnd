import { Button } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from "react";
import Input from 'react-phone-number-input/input'
import Form from 'react-bootstrap/Form';
import emailjs from 'emailjs-com';
import "../App.css";
import Alert from 'react-bootstrap/Alert';
import { useLocation } from 'react-router-dom';
import "../Contact.css";


const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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
        displayMessage();
    }, [submitStatus]);




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
        validateContact(event);
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
            <section className="hero-form">
                <Row className="hero-form-content ">
                    <h1>Contact Us</h1>
                </Row>

            </section>
            <div className="form-hero mb-2">

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