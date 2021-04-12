import React from 'react';
import Routes from './config/routes';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Logout from './components/Logout';
import { useRecoilValue } from 'recoil'
import{ loggedInState } from './recoil/selectors'

function App() {
  const loggedIn = useRecoilValue(loggedInState)

  return (
    <div>
      {loggedIn && <div className="w-100 d-flex justify-content-end"><Logout /></div>}
      <Container className="app d-flex justify-content-center align-items-center flex-wrap" fluid>
        <div className="w-100" >
          <Routes />
        </div>
      </Container>
      <Row className="align-items-bottom justify-content-left">
          <Footer />
      </Row>
    </div>
    
  );
}

export default App;
