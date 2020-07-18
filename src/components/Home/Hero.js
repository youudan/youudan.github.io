import React from 'react';
import { Link } from 'react-scroll';
import { Jumbotron, Container } from 'react-bootstrap';
function Hero() {
  return (
    <Jumbotron className='bg-transparent hero'>
      <Container>
        <h1 className='hero-title'>
          Hi, my name is <span className='text-primary'>Wijdan</span>
          <br />
          I'm the Web Developer.
          <br />
        </h1>
        <p className='hero-cta'>
          <Link className='btn btn-outline-primary btn-lg' to='about' spy={true} smooth={true} duration={500}>
            Know more
          </Link>
        </p>
      </Container>
    </Jumbotron>
  );
}

export default Hero;
