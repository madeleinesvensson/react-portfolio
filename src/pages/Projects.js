import React from "react";
import styled from "styled-components";
import data from "../assets/projects";
import GithubIcon from "../assets/GithubIcon.svg"
import { SectionWrapper } from "components/UI/SectionWrapper";
import { ProjectDivider } from "components/UI/Divider";
import {ProjectContainter} from "components/UI/ProjectContainer"
const Heading = styled.h2`
  color: #004e64;
  font-size: 30px;
  padding: 0px;
  margin: 10px;
  text-align: center;
`;



const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProjectTag = styled.p`
  margin: 5px 5px 5px 0px;
  font-size: 15px;
  font-weight: 500;
  position: absolute;
  color: white;

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

const Button = styled.button`
  border-radius: 50%;
  border: none;
  width: 32px;
  height: 32px;
  color: white;
  font-size: 13px;
  background-color: #c89f9c;
  margin: 2px 0px 0px 3px;

`;
const Icon = styled.img`
width: 35px;
height: 35px;
margin: 0px;
`
const Tagwrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  white-space: nowrap;
  padding-left: 10px;
`;
const Tags = styled.div`
  color: white;
  padding: 5px;
  margin: 2px;
  width: fit-content;
  font-size: 13px;
  height: 20px;
  background-color: #004e64;
  display: flex;
  justify-content:center;
  align-items:center;
`;



export const Projects = () => {
  const colorSwitcher = (tags) => {
    switch (tags) {
      case "Technigo":
        return "#a799b7";
      case "Own":
        return "#6c464f";
      default:
        return "white";
    }
  };
  return (
    <SectionWrapper>
      <Heading>Projects</Heading>
      <ProjectWrapper>
        {data.map((item) => (
          <>
          <ProjectContainter key={item.project_id}>
            <ProjectTag style={{ backgroundColor: colorSwitcher(item.tags) }}>
              {item.tags}
            </ProjectTag>
            <a href={item.netlify} rel="noopener noreferrer" target="_blank">
              <ProjectImage src={item.image} alt={item.title} />
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
            </a>
            
            <Tagwrapper>
              {item.tech.map((tag) => (
                <Tags key={tag}>{tag}</Tags>
              ))}

              <a href={item.github} rel="noopener noreferrer" target="_blank">
                <Icon src={GithubIcon} alt="github"/>
              </a>
              {item.netlify2 && (
                <a
                  href={item.netlify2}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button type="button">API</Button>
                </a>
              )}

            </Tagwrapper>
          </ProjectContainter>
        <ProjectDivider></ProjectDivider>
        </>
        )
        
        )}
      </ProjectWrapper>
    </SectionWrapper>
  );
};
