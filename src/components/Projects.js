import React from "react";
import styled from "styled-components";
import data from "../assets/projects";

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

export const Projects = () => {
  return (
    <SectionWrapper>
      <Heading>Projects</Heading>
      {data.map((item) => (
        <ProjectContainter key={item.project_id}>
          <p>{item.tag}</p>
          <a href={item.netlify} rel="noopener noreferrer" target="_blank">
            <img src={item.image} alt={item.title} />
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
          </a>
          <a href={item.github} rel="noopener noreferrer" target="_blank">
            <Button type="button">&lt;Code&gt;</Button>
          </a>
          <div>
            {item.netlify2 && (
              <a href={item.netlify2} rel="noopener noreferrer" target="_blank">
                <Button type="button">API</Button>
              </a>
            )}
          </div>
          <div>
            {item.tech.map((tag) => (
              <Tags key={tag}>{tag}</Tags>
            ))}
          </div>
        </ProjectContainter>
      ))}
    </SectionWrapper>
  );
};
