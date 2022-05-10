import React from "react";
import styled from "styled-components";
import data from "../assets/techStack"

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  margin-top:20px;
  width: 90%;
  `;

const Heading = styled.h2`
  color: #264653;
  font-size: 30px;
  padding: 0px;
  text-align: left;
  margin: 10px;
  border-bottom: 3px solid black;
`;
const TechText = styled.p`
  font-size: 20px;
  padding: 7px 40px 7px 10px;
  margin: 1px;
width: fit-content;
font-size:20px;
color: white;
`;

const TechWrapper = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`

export const Tech = () => {

  const TechSwitcher = (tag) => {
    switch (tag) {
      case "CSS":
        return "black";
      case "HTML":
        return "#6c464f";
        case "JavaScript":
        return "#6c464f";
        case "React":
        return "#6c464f";
        case "Redux":
        return "#6c464f";
        case "Accessability":
        return "#6c464f";
        case "Figma":
        return "#6c464f";
        case "API's":
        return "#6c464f";
        case "Mongo DB":
        return "#6c464f";
        case "Flexbox":
        return "#6c464f";
        case "TypeScript":
        return "#6c464f";
        case "Pair-programming":
        return "#6c464f";
        case "Mob-programming":
        return "#6c464f";
      default:
        return "white";
    }
  };
  return (
    <SectionWrapper>
      
      <Heading>Tech stack</Heading>

      <TechWrapper>
      {data.map((tech) =>(
      <TechText 
      key={tech} 
      style={{ backgroundColor: TechSwitcher(tech.tag)}}>
        {tech.tag}
      </TechText>
     ))}
      </TechWrapper>

    </SectionWrapper>
  );
};
