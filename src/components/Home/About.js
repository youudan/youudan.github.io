import React from 'react';
import { Element } from 'react-scroll';
import { Container, Row, Col, Button } from 'react-bootstrap';

function About(props) {
  return (
    <Element name='about' className='bg-about pt-5 pb-5'>
      <Container className='about text-center text-white'>
        <h1 className='section-title'>About me</h1>
        <Row className=' pt-5 pb-5'>
          <Col xs={12} md={6} className=''>
            <img src={props.img} alt='' />
          </Col>
          <Col xs={12} md={6} className='text-left mt-3' style={{ padding: '0 2rem' }}>
            <p>I am a Web Developer with enthusiasm and focus on Fullstack Development.</p>
            <p>
              I am passionate about building scalable software, creating effective solutions, and learning every day to
              grow professionally in the IT field.
            </p>
            <p>Feel free to contact me via email at any time</p>

            <Button variant='outline-light'>View Resume</Button>
          </Col>
        </Row>
      </Container>
    </Element>
  );
}

export default About;
