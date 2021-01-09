
import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './checkemail.css';



class CheckEmail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }
  testSubmit() {
    alert("submit is worrking");
    return true;
   }

  render() {

    return (
      <div className='Email-validation'>
        <Form onSubmit={this.testSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address for validation</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
    </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="also check in hacked databases" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
  </Button>
        </Form>
      </div>
    );
  }
}

export default CheckEmail;