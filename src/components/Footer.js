import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 70px;
  background-color: #004e64;
`;
const Title = styled.h3`
  font-size: 20px;
  color: white;
  text-align: center;
  margin: 0px;
  font-weight: 200;
`;
const Name = styled.h3`
  font-size: 25px;
  color: white;
  text-align: center;
  margin: 0px;
  font-weight: 200;
  font-family: "Nothing You Could Do";
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <Title>Developed by</Title>
      <Name>Madeleine Svensson</Name>
    </FooterWrapper>
  );
};
