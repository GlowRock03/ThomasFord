import 'bootstrap/dist/css/bootstrap.min.css';
import "./HomePage.css";

import { Container, Navbar, Nav, Row, Col, Button, Image } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div>
      <Navbar expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#">Me</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#">WHO</Nav.Link>
              <Nav.Link href="#">WHAT</Nav.Link>
              <Nav.Link href="#">WHERE</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* First Section */}
      <Container fluid className="bg-1 text-center">
        <h3 className="margin">Who Am I?</h3>
        <Image
          src="bird.jpg"
          roundedCircle
          className="margin"
          width={350}
          height={350}
          alt="Bird"
        />
        <h3>I'm an adventurer</h3>
      </Container>

      {/* Second Section */}
      <Container fluid className="bg-2 text-center">
        <h3 className="margin">What Am I?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <Button variant="light" size="lg">
          <i className="bi bi-search"></i> Search
        </Button>
      </Container>

      {/* Third Section */}
      <Container fluid className="bg-3 text-center">
        <h3 className="margin">Where To Find Me?</h3>
        <Row>
          {[1, 2, 3].map((num) => (
            <Col sm={4} key={num}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <Image
                src={`birds${num}.jpg`}
                className="margin"
                style={{ width: '100%' }}
                alt={`Bird ${num}`}
                fluid
              />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
      <Container fluid className="bg-4 text-center py-3">
        <p>
          Bootstrap Theme Made By <a href="https://www.w3schools.com">www.w3schools.com</a>
        </p>
      </Container>
    </div>
  );
};

export default HomePage;