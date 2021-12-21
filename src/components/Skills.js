import React from "react";
import styled from "styled-components";
import data from "../assets/skills";

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

export const Skills = () => {
  return (
    <SectionWrapper>
      <Heading>Projects</Heading>
      <span>
        {data.map((skills) => (
          <ProjectContainter key={skills}>
            <Title>Code</Title>
            {skills.code.map((skill) => (
              <Description>{skill}</Description>
            ))}
            <Title>Toolbox</Title>
            {skills.toolbox.map((skill) => (
              <Description>{skill}</Description>
            ))}
            <Title>More</Title>
            {skills.more.map((skill) => (
              <Description>{skill}</Description>
            ))}
          </ProjectContainter>
        ))}
      </span>
    </SectionWrapper>
  );
};
