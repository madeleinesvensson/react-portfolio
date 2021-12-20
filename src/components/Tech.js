import React from "react";
import styled from "styled-components";
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
const TechText = styled.p`
  color: #353535;
  font-size: 25px;
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
