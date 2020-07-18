import React from 'react';
import { Container } from 'react-bootstrap';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
  const project = {
    title: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas sed ipsam laborum commodi deserunt necessitatibus iste, dolores sapiente fuga quam, aperiam consequatur ut neque temporibus doloribus modi! Nihil, adipisci molestias!',
    thumbnail: 'https://simplfolio.netlify.app/assets/project.5ad6096036391d70f3f8cdadc5937cf4.jpg'
  };
  return (
    <div id='portfolio' className='pt-5'>
      <Container className='text-center'>
        <h1 className='section-title'>Portfolio</h1>
        <div className='mt-5'>
          <PortfolioItem project={project} />
        </div>
      </Container>
    </div>
  );
}

export default Portfolio;
