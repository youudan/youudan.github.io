import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
  const data = [
    {
      id: 2,
      title: 'Contact Keeper',
      description:
        'Github finder is an application that functions to find GitHub users and display information about these users. Built using Reactjs',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1vsJ7j5cwhluv6z1Zyd8-to6zTQ-f7BQC',
      liveLink: 'https://youudan-contact-keeper.herokuapp.com/',
      devWith: [
        {
          name: 'ReactJs',
          icon: 'https://cdn.iconscout.com/icon/free/png-256/mongodb-226029.png'
        },
        {
          name: 'ReactJs',
          icon: 'https://www.sohamkamani.com/static/65137ed3c844d05124dcfdab28263c21/6b427/express-routing-logo.png'
        },
        {
          name: 'ReactJs',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png'
        }
      ]
    },
    {
      id: 1,
      title: 'Github Finder',
      description:
        'Github finder is an application that functions to find GitHub users and display information about these users. Built using Reactjs',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1ANVONqKYHEVbyWw9nJfg6SReMSd--h6F',
      liveLink: 'https://github-finder-youudan.netlify.app/',
      devWith: [
        {
          name: 'ReactJs',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png'
        }
      ]
    }
  ];
  useEffect(() => {
    setProjects(data);
  }, []);
  const [projects, setProjects] = useState(null);
  const [hasMore, setHasMore] = useState(false);
  const fetchMoreData = () => {
    setTimeout(() => {
      setProjects([...projects, ...projects]);
    }, 500);
  };
  return (
    <div id='portfolio' className='pt-5'>
      {projects !== null && projects.length > 0 ? (
        <InfiniteScroll
          dataLength={projects.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4 className='text-center'>Loading...</h4>}
          endMessage={
            <p className='text-center'>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <Container className='text-center'>
            <h1 className='section-title'>Portfolio</h1>
            <div className='mt-5'>
              {projects.map((project) => (
                <PortfolioItem project={project} key={project.id} />
              ))}
            </div>
          </Container>
        </InfiniteScroll>
      ) : (
        <p>404</p>
      )}
    </div>
  );
};

export default Portfolio;
