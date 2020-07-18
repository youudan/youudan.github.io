import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from 'react-bootstrap';

const Contact = (props) => {
  const openEmail = () => {
    return (window.location.href = `mailto:${props.email}`);
  };

  return (
    <div className='bg-contact pt-5 pb-5'>
      <Container className='text-center text-white'>
        <h1 className='section-title'>Contact</h1>
        <p>Would you like to work with me? Awesome!</p>
        <Button variant='outline-light' size='lg' onClick={openEmail}>
          Lets build together!
        </Button>
      </Container>
    </div>
  );
};

Contact.propTypes = {
  email: PropTypes.string.isRequired
};

export default Contact;
