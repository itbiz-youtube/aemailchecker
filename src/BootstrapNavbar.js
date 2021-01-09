import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // useParams,
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
  import CheckEmail from './CheckEmail';
  import API from './API';
  import ContactUs from './ContactUs';
  import './custom.css';

class BootstrapNavbar extends React.Component{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar  bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="#home">A-Email Checker</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Check Email</Nav.Link>
                                    <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                                    <Nav.Link href="/API">API</Nav.Link>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                    </Nav>
                                    <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-success">Search</Button>
                                    </Form>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Switch>
                                <Route exact path="/">
                                    <CheckEmail />
                                </Route>
                                <Route path="/API">
                                    <API />
                                </Route>
                                <Route path="/contact-us">
                                    <ContactUs />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )  
    }
}

export default BootstrapNavbar;