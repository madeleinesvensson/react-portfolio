import React from "react";
import styled from "styled-components";

const Greeting = styled.span`
  color: orange;
  font-size: 40px;
  font-weight: 500;
  padding: 10px;
`;
const AboutText = styled.p`
  font-size: 25px;
  font-weight: 300;
  padding: 0px;
  margin: 0px;
  color: #353535;
`;

const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: lightgray;
  padding: 50px 200px;
`;

export const About = () => {
  return (
    <SectionWrapper>
      <AboutText>
        <Greeting>&lt;Hello&gt;</Greeting>
        I'm Madeleine, a creative Frontend Developer with a passion for (UX)
        design. Ten years ago I coded my first website with HTML and CSS. Today
        I'm building things I only dreamed of doing ten years ago, using
        JavaScript, React and Redux.<Greeting>&lt;/Hello&gt;</Greeting>
      </AboutText>
    </SectionWrapper>
  );
};
