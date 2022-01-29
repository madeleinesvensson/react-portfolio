import React from "react";
import styled from "styled-components";
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
const TechText = styled.p`
  color: #353535;
  font-size: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 10px;
`;

export const Tech = () => {
  return (
    <SectionWrapper>
      <Heading>Tech</Heading>
      <TechText>
        JavaScript, HTML, CSS, Flexbox, React, Accessability, Redux, API:s,
        mob-programming, pair-programming, Figma &amp; Mongo DB.
      </TechText>
    </SectionWrapper>
  );
};
