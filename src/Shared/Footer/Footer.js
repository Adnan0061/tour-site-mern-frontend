import React from 'react';
import { Col, Container, FormControl, InputGroup, Button, Row, ListGroup } from 'react-bootstrap';
import { Facebook, Instagram, Linkedin, Twitter } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
    <div  style={{backgroundColor: 'rgb(13, 202, 240)'}}>
    <Container>
      <Row className='py-5'>
        <Col xs={12} md={4} lg={4} className='text-start'>
        <Link to={'/home'} style={{textDecoration: 'none', color: 'white'}}><h2>eHealth</h2></Link>
          <p>eHealth, a online healthcare platform you can trust. Your health and easy healthcare access are always our first priority</p>
        </Col>

        <Col xs={12} md={4} lg={{ span: 3, offset: 2 }} className='text-start'>
          <h4>Quick links</h4>
          <ListGroup variant="flush">
          <Link style={{textDecoration: 'none'}} to={'/home'}><ListGroup.Item className='border-0 bg-transparent'>Home</ListGroup.Item></Link>
          <Link style={{textDecoration: 'none'}} to={'/doctors'}><ListGroup.Item className='border-0 bg-transparent'>Doctors List</ListGroup.Item></Link>
          <Link style={{textDecoration: 'none'}} to={'/home'}><ListGroup.Item className='border-0 bg-transparent'>Contact Us</ListGroup.Item></Link>
          </ListGroup>
        </Col>

        <Col xs={12} md={4} lg={3} className='text-start'>
          <h4>Subscribe to NewsLetter</h4>
          <InputGroup className="mb-3">
            <FormControl
              style={{backgroundColor: 'transparent', border:'1px solid grey'}}
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon2"
            />
            <Button variant="warning" id="button-addon2">
              subscribe
            </Button>
          </InputGroup>
          <ListGroup horizontal className>
            <ListGroup.Item className='border-0 bg-transparent'><Facebook size='28' className='border-0 bg-transparent px-0'></Facebook></ListGroup.Item>
            <ListGroup.Item className='border-0 bg-transparent'><Instagram size='28' className='border-0 bg-transparent'></Instagram></ListGroup.Item>
            <ListGroup.Item className='border-0 bg-transparent'><Twitter size='28' className='border-0 bg-transparent'></Twitter></ListGroup.Item>
            <ListGroup.Item className='border-0 bg-transparent'><Linkedin size='28' className='border-0 bg-transparent'></Linkedin></ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
    </div>

    <div  style={{backgroundColor: '#0f89a2'}}>
    <Container>
      <Row>
          <Col className=''>
            <small>©eHealth 2021. All rights reserved.</small>
          </Col>
      </Row>
    </Container>
    </div>
    </div>
  );
};

export default Footer;