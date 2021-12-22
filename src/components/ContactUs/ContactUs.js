import React from 'react';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import contact from '../images/contact-us.jpg'
import { Link } from 'react-router-dom';
import './Contact.css'

const ContactUs = () => {
    return (
        <div>
            <img src={contact} alt="" />
            <br /> <br /> <br /> <br />
            <Form className='container'>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Row>
                <FloatingLabel controlId="floatingTextarea2" label="Message">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>
                <br />
                <Button type="submit">
                    <Link className="text-light" to="/">Submit</Link>
                </Button>
            </Form>
            <br />
        </div>
    );
};

export default ContactUs;