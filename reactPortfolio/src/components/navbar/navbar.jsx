// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// function Header() {
//   return (
//     <>
//       <Navbar bg="primary" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//       </>
//   );
// }
// export default Header;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" id='home'> 
        <Container>
          <Navbar.Brand href="#home">Mohamed Haytham</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about-me">About me</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#contact-me">Contact me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;