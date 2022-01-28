import React from "react";
import styled from "styled-components";
import data from "../assets/articles";

const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  padding: 20px;
`;
const Heading = styled.h2`
  color: #004e64;
  font-size: 30px;
  padding: 0px;
  margin: 10px;
  text-align: center;
`;
const ProjectContainter = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 95%;
  max-width: 500px;
  margin: 10px 0px;
  padding-bottom: 10px;
  a {
    text-decoration: none;
  }
`;
const Title = styled.h3`
  font-size: 30px;
  color: #353535;
  text-align: center;
  margin: 0px;
  font-weight: 200;
`;
const Description = styled.p`
  font-size: 20px;
  color: #353535;
  font-weight: 200;
  padding: 5px;
  margin: 5px 0px;
`;
const ArticleImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const Article = () => {
  return (
    <SectionWrapper>
      <Heading>Articles</Heading>
      {data.map((article) => (
        <ProjectContainter key={article.articles_id}>
          <a href={article.url} rel="noopener noreferrer" target="_blank">
            <ArticleImage src={article.image} alt={article.title} />
            <Title>{article.title}</Title>
            <Description>{article.description}</Description>
          </a>
        </ProjectContainter>
      ))}
    </SectionWrapper>
  );
};
