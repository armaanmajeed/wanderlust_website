import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";

import NavBar from "./Navbar";
import './style.css'

class AdminLogin extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <h1 class="heading" style={{marginBottom: '5%'}}>Admin Login</h1>
        <div class="container">
          <Card style={{ width: "25rem", margin: 'auto', height: '17rem', backgroundColor: '#f6f8fa' }}>
            <Card.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label style={{marginBottom: '10px'}}>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" style={{marginBottom: '15px'}}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label style={{marginBottom: '10px'}}>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" style={{marginBottom: '15px'}}/>
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  style={{ marginTop: "15px", marginLeft: '150px' }}
                >
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminLogin;
