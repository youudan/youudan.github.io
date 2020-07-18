import React, { Fragment } from 'react';
import { Row, Col, Button, Image } from 'react-bootstrap';

const PortfolioItem = (props) => {
  return (
    <Fragment>
      <Row className='portfolio-item mb-5'>
        <Col sm={12} lg={6} className='text-left mt-4 pb-4 pl-3' style={{ padding: '0 2rem' }}>
          <h3>{props.project.title}</h3>
          <p>{props.project.description}</p>

          <Button variant='outline-primary'>See Live</Button>
        </Col>
        <Col sm={12} lg={6} className=''>
          <Image src={props.project.thumbnail} fluid />
        </Col>
      </Row>
    </Fragment>
  );
};

export default PortfolioItem;
