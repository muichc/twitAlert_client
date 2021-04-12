import React from 'react';
import Routes from './config/routes';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function App() {
  return (
    <div>
      <Container className="app d-flex justify-content-center align-items-center" fluid>
        <Row className="">
          <Routes />
        </Row>
      </Container>
      <Row className="align-items-bottom justify-content-left">
          <Footer />
      </Row>
    </div>
    
  );
}

export default App;
