import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
    return (
    <footer className="footer">
        <Container id="contact-me">
            <Row >
            <Col md={4} className="footer-section">
                <h5>Follow Me</h5>
                <div className="social-icons">
                <a href="https://www.facebook.com/profile.php?id=100004859500626&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
                <a href="https://www.instagram.com/m.haytham10/" target="_blank" rel="noopener noreferrer">
                    <FaInstagramSquare />
                </a>
                <a href="https://www.linkedin.com/in/mohamed-haytham-5420042a8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRJ9QYxt1RTGhwx36%2B%2B3f%2Fw%3D%3D" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Mhaytham0" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                </div>
            </Col>
            <Col md={4} className="footer-section">
                <h5>Contact Me</h5>
                <p>Email: mhaytham607@gmail.com</p>
                <p>Phone: +20 1090000210</p>
            </Col>
            </Row>
            <Row className="mt-4">
                <Col className="text-center">
                    <p>&copy; 2024 Mohamed Haytham. All Rights Reserved.</p>
                </Col>
            </Row>
        </Container>
    </footer>
    );
};
export default Footer;