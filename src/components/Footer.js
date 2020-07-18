import React from 'react';
import PropTypes from 'prop-types';
import { animateScroll as Scrol } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
const Footer = (props) => {
  const date = new Date();

  const scrollToTop = () => {
    Scrol.scrollToTop();
  };
  return (
    <div className='footer'>
      <FontAwesomeIcon icon={faChevronUp} onClick={scrollToTop} className='mb-4' />
      <br />
      <FontAwesomeIcon icon={faLinkedinIn} size='lg' className='icon' />
      <FontAwesomeIcon icon={faGithub} size='lg' className='icon' />

      <p className='credits mt-4'>&copy; {`${date.getFullYear()} - ${props.credits}`}</p>
    </div>
  );
};

Footer.propTypes = {
  credits: PropTypes.string.isRequired
};

export default Footer;
