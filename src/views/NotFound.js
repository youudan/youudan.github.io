import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='hero'>
      <Container>
        <div className='hero-title text-center'>
          <h1 className=''>404</h1>
          <Link to='/' className='btn btn-primary text-light'>
            Back to home
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default NotFound;
