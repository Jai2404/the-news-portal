import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import axios from 'axios';

const Container = styled.div`
  margin-top: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Card = styled.div`
  width: 30%; /* Adjust the width as needed */
  margin-bottom: 20px;
`;

const TopHeadings = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=13aa3840ad6542d1b4f13aa762e81db9")
      .then((response) => {
        console.log(response);
        setData(response.data.articles);
      });
  };

  return (
    <>
      <Navbar />
      <Container>
        <CardContainer>
          {data.map((value, index) => (
            <Card key={index}>
              <img src={value.urlToImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{value.title}</h5>
                <p className="card-text">{value.description}</p>
                <a href={value.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
            </Card>
          ))}
        </CardContainer>
      </Container>
    </>
  );
};

export default TopHeadings;
