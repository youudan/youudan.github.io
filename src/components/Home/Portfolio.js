import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [projects, setProjects] = useState(null);
  const [hasMore, setHasMore] = useState(false);
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://raw.githubusercontent.com/youudan/youudan.github.io/development/data.json"
      );
      const json = await data.json();
      setProjects(json.data.projects);
      console.log(json.data.projects);
    } catch (error) {
      console.error(error);
    }
  };
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
        <p className='text-center'>404</p>
      )}
    </div>
  );
};

export default Portfolio;
