import React from "react";
import styled from "styled-components";
import data from "../assets/articles";

const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  padding: 50px 200px;
`;
const Heading = styled.h2`
  background-color: orange;
  color: white;
  font-size: 30px;
  padding: 10px;
`;
const ProjectContainter = styled.div`
  border: 1px solid black;
  a {
    text-decoration: none;
  }
`;
const Title = styled.h3`
  font-size: 30px;
  color: #353535;
`;
const Description = styled.p`
  font-size: 24px;
  color: #353535;
  font-weight: 200;
`;
const Button = styled.button`
  border-radius: 10px;
  padding: 10px;
  width: 150px;
  color: white;
  font-size: 20px;
  background-color: blue;
`;
const Tags = styled.div`
  background-color: orange;
  color: white;
  padding: 10px;
  margin: 10px;
`;

export const Article = () => {
  return (
    <SectionWrapper>
      <Heading>Projects</Heading>
      {data.map((article) => (
        <ProjectContainter key={article.articles_id}>
          <a href={article.url} rel="noopener noreferrer" target="_blank">
            <img src={article.image} alt={article.title} />
            <Title>{article.title}</Title>
            <Description>{article.description}</Description>
          </a>
        </ProjectContainter>
      ))}
    </SectionWrapper>
  );
};
