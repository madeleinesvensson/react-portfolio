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

export const Projects = () => {
  return (
    <SectionWrapper>
      <Heading>Projects</Heading>
      {data.map((item) => (
        <div key={item.project_id}>
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <a href={item.netlify} rel="noopener noreferrer" target="_blank">
            <button type="button">Live</button>
          </a>
          <a href={item.github} rel="noopener noreferrer" target="_blank">
            <button type="button">Code on Github</button>
          </a>
          <span>{item.tech}</span>
        </div>
      ))}
    </SectionWrapper>
  );
};
