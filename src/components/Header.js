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
  height: 250px;
`;
const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  /* @media (min-width: 480px, max-width:767px) {
    margin-left: 70px;
  }
  @media (min-width: 768px) {
    margin-left: 500px;
  } */
`;
const Name = styled.p`
  font-size: 20px;
  font-family: "Montserrat";
  font-weight: 100;
  color: white;
  margin: 0px;
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
const AlignNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Header = () => {
  return (
    <SectionWrapper>
      <AlignNav>
        <Name>Portfolio: Madeleine Svensson</Name>
        <Navigation />
      </AlignNav>
      <TextWrapper>
        <Ampersand>&amp;</Ampersand>
        <div>
          <FirstHeading>Frontend developer</FirstHeading>
          <SecondHeading>UX designer</SecondHeading>
        </div>
      </TextWrapper>
    </SectionWrapper>
  );
};
