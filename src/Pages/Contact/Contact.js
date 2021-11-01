import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { Envelope, Map, PinMap, TelephoneInbound } from 'react-bootstrap-icons';

const Contact = () => {
    return (
        <div style={{height: '65vh'}}>
            <Container className='mt-5'>
                <Row>
                    <Col className='text-start text-secondary mx-3 my-3'>
                        <Row className='my-4 p-2 shadow' style={{borderRadius: '15px'}}>
                            <Col xs='auto' className='pt-2'><TelephoneInbound size='46'></TelephoneInbound></Col>
                            <Col className='flex-grow-1'>
                                <h6>Help Line</h6>
                                <h3>16247</h3>
                            </Col>
                        </Row>
                        <Row className='my-4 p-2 shadow' style={{borderRadius: '15px'}}>
                            <Col xs='auto'><PinMap size='46'></PinMap></Col>
                            <Col>
                                <h6>Head Office</h6>
                                <h3>62/2 Gulshan, Dhaka</h3>
                            </Col>
                        </Row>
                        <Row className='my-4 p-2 shadow' style={{borderRadius: '15px'}}>
                            <Col xs='auto'><Envelope size='46'></Envelope></Col>
                            <Col>
                                <h6>Email</h6>
                                <h3>info@ehealth.com</h3>
                            </Col>
                        </Row>
                    </Col>
                    <Col className='text-start mx-3 my-3'>
                        <h2>Contact Us</h2>
                    <Form className='text-start'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="info" type="submit">Submit</Button>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;