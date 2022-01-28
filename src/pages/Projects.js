import React from "react";
import styled from "styled-components";
import data from "../assets/projects";

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

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectTag = styled.p`
  margin: 5px 5px 5px 0px;
  font-size: 15px;
  font-weight: 500;
  position: absolute;
  color: white;
  background: #6c464f;
  padding: 5px 15px 5px 5px;
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

const Buttonwrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Button = styled.button`
  border-radius: 5px;
  border: none;
  padding: 5px;
  width: 70px;
  color: white;
  font-size: 15px;
  background-color: #c89f9c;
  margin: 0px 0px 10px 0px;
`;
const Tagwrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  white-space: nowrap;
  padding-left: 10px;
`;
const Tags = styled.div`
  background-color: #004e64;
  color: white;
  padding: 5px;
  margin: 2px;
  width: fit-content;
  font-size: 10px;
`;

export const Projects = () => {
  return (
    <SectionWrapper>
      <Heading>Projects</Heading>
      {data.map((item) => (
        <ProjectContainter key={item.project_id}>
          <ProjectTag>{item.tags}</ProjectTag>
          <a href={item.netlify} rel="noopener noreferrer" target="_blank">
            <ProjectImage src={item.image} alt={item.title} />
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
          </a>
          <Buttonwrapper>
            <a href={item.github} rel="noopener noreferrer" target="_blank">
              <Button type="button">&lt;Code&gt;</Button>
            </a>
            {item.netlify2 && (
              <a href={item.netlify2} rel="noopener noreferrer" target="_blank">
                <Button type="button">API</Button>
              </a>
            )}
          </Buttonwrapper>
          <Tagwrapper>
            {item.tech.map((tag) => (
              <Tags key={tag}>{tag}</Tags>
            ))}
          </Tagwrapper>
        </ProjectContainter>
      ))}
    </SectionWrapper>
  );
};
