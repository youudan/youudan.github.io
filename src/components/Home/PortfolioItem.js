import React, { Fragment } from 'react';
import { Row, Col, Button, Image } from 'react-bootstrap';

const PortfolioItem = (props) => {
  const seeLive = () => {
    window.open(props.project.liveLink, '_blank');
  };
  return (
    <Fragment>
      <Row className='portfolio-item mb-5'>
        <Col sm={12} lg={6} className='text-left mt-4 pb-4 pl-3' style={{ padding: '0 2rem' }}>
          <h3>{props.project.title}</h3>
          <p>{props.project.description}</p>
          <div className='mb-3'>
            {props.project.devWith.map((dev) => (
              <Image src={dev.icon} width='100px' className='mr-3' fluid />
            ))}
          </div>
          <Button variant='outline-primary' onClick={seeLive}>
            See Live
          </Button>
        </Col>
        <Col sm={12} lg={6} className=''>
          <Image src={props.project.thumbnail} className='shadow' fluid />
        </Col>
      </Row>
    </Fragment>
  );
};

export default PortfolioItem;
