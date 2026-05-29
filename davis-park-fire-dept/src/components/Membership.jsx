import Image from "react-bootstrap/esm/Image";
import "../Membership.css";
import Container from "react-bootstrap/Container";
import { useNavigate } from 'react-router-dom';
import "../assets/images/truckLightHero.png";
import Col from "react-bootstrap/esm/Col";
import rightImage from '../assets/images/truckLightHero.png';
const Membership = () => {

    const navigate = useNavigate();
    return (
        <Container fluid className="membership-hero">

            <div className="hero-left">
                {/* <Image src="/Images/logo1.png" alt="Davis Park Fire Dept emblem" className="hero-emblem" />  */}
                <h1>Become a Member</h1>
                <p>
                    Our mission is to protect our community and surrounding region by providing prompt,
                    professional, and caring services through continuous education, preparation, and
                    community engagement.
                </p>
                <div className="hero-contact">

                    <button className="btn-secondary" onClick={() => navigate('/Contact')}>Click To Contact Us</button>
                </div>
                <div className="hero-contact">
                    <p>📞 631‑597‑6024</p>
                    <p>✉️ Secretary@davisparkfd.org</p>
                    <small>Proudly serving our community for over 60 years.</small>
                </div>
            </div>

            <div className="hero-right">
                <img src={rightImage} />

            </div>
        </Container>
    );
};

export default Membership;