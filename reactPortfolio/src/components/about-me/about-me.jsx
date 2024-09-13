import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './about-me.css';
// import aboutMeStyle from './about-me.module.css'
import { Component } from 'react';
export default class AboutMe extends Component{
  render(){
    return(
      <>
      <Container fluid className="about-container" id='about-me'>
      <Row>
        <Col md={4} className="about-title">
          <h1>About Me</h1>
        </Col>

        <Col md={8}>
          <Card className="about-card">
            <Card.Body>
              <Card.Text>
                <p>
                  Hi, I am <strong>Mohamed Haytham</strong>, a web developer and with expertise in both front-end and back-end development.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
      </>
    )
  } 
}