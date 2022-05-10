import React from "react";
import styled from "styled-components";
import data from "../assets/skills";
import { SectionWrapper } from "./UI/SectionWrapper";
import { ProjectContainter } from "./UI/ProjectContainer";

const Heading = styled.h2`
  color: #004e64;
  font-size: 30px;
  padding: 0px;
  margin: 10px;
  text-align: center;
`;

const SkillsAlign = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

const Title = styled.h3`
  font-size: 20px;
  color: #353535;
  text-align: center;
`;
const Description = styled.p`
  font-size: 24px;
  color: #353535;
  font-weight: 200;
  margin: 10px;
`;

export const Skills = () => {
  return (
    <SectionWrapper>
      <Heading>Skills</Heading>

      {data.map((skills) => (
        <SkillsAlign>
          <ProjectContainter key={skills}>
            <Title>Code</Title>
            {skills.code.map((skill) => (
              <Description key={skill}>{skill}</Description>
            ))}
          </ProjectContainter>
          <ProjectContainter key={skills}>
            <Title>Toolbox</Title>
            {skills.toolbox.map((skill) => (
              <Description key={skill}>{skill}</Description>
            ))}
          </ProjectContainter>
          <ProjectContainter key={skills}>
            <Title>More</Title>
            {skills.more.map((skill) => (
              <Description key={skill}>{skill}</Description>
            ))}
          </ProjectContainter>
        </SkillsAlign>
      ))}
    </SectionWrapper>
  );
};
