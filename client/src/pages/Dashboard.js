import React from 'react';
import TweetsContainer from '../container/TweetsContainer';
import Logout from '../components/Logout';
import UserInfo from '../components/UserInfo';

// Bootstrap + CSS
import '../static/css/dashboard.css';
import Col from 'react-bootstrap/Col';


const Dashboard = () => {
    return (
        <div className="dashboard d-flex justify-content-around">
            <Col>
                <TweetsContainer />
            </Col>
            <Col className="d-flex justify-content-center">
                <UserInfo />
            </Col>
        </div>
    );
}

export default Dashboard;
