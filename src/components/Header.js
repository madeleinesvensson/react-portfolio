import React from "react";
import styled from "styled-components";
import { Navigation } from "./Navigation";

const SectionWrapper = styled.div`
  display: block;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px 20px;
  background-color: #004e64;
  box-sizing: border-box;
  height: 300px;
`;
const TextWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Name = styled.p`
  font-size: 20px;
  font-family: "Montserrat";
  font-weight: 100;
  color: white;
`;

const FirstHeading = styled.h1`
  font-size: 40px;
  margin: 0px;
  padding: 0px;
  color: white;
`;
const SecondHeading = styled.h1`
  font-size: 30px;
  margin: 0px;
  padding: 0px;
  color: white;
`;

const Ampersand = styled.p`
  font-size: 100px;
  padding: 0px 20px 0px 0px;
  margin: 0px;
  color: orange;
`;

export const Header = () => {
  return (
    <SectionWrapper>
      <Name>Portfolio: Madeleine Svensson</Name>
      <TextWrapper>
        <Ampersand>&amp;</Ampersand>
        <div>
          <FirstHeading>Frontend developer</FirstHeading>
          <SecondHeading>UX designer</SecondHeading>
        </div>
      </TextWrapper>
      <div>
        <Navigation />
      </div>
    </SectionWrapper>
  );
};
