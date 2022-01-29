import React from "react";
import styled from "styled-components";
import Github from "assets/github.svg";
import LinkedIn from "assets/linkedin.svg";
import location from "assets/location.svg";
import mail from "assets/mail.svg";
import phone from "assets/phone.svg";

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
const ContactContainer = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 95%;
  max-width: 500px;
  margin: 10px 10px;
  padding-bottom: 10px;
  a {
    text-decoration: none;
  }
`;

const Icon = styled.img`
  height: 40px;
  width: 40px;
  margin: 10px;
`;
const Title = styled.h3`
  font-size: 30px;
  color: #353535;
  text-align: center;
  margin: 0px;
  font-weight: 200;
`;

const Info = styled.h4`
  font-size: 20px;
  color: #353535;
  text-align: center;
  margin: 0px;
  font-weight: 200;
`;
const Align = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Contact = () => {
  return (
    <>
      <SectionWrapper>
        <Heading>Contact</Heading>
        <ContactContainer>
          <Title>Madeleine Svensson</Title>
          <Title>Frontend Developer</Title>
          <Align>
            <Icon src={phone}></Icon>
            <Info> +46 76 320 93 69</Info>
          </Align>
          <Align>
            <Icon src={mail}></Icon>
            <Info>Madeleinesvensson13@gmail.com</Info>
          </Align>
          <Align>
            <Icon src={location}></Icon>
            <Info>Stockholm, Sweden</Info>
          </Align>
          <a href="www.linkedin.com/in/madeleine-svensson">
            <Align>
              <Icon src={LinkedIn}></Icon>
              <Info>LinkedIn</Info>
            </Align>
          </a>
          <a href="https://github.com/madeleinesvensson">
            <Align>
              <Icon src={Github}></Icon>
              <Info>Github</Info>
            </Align>
          </a>
        </ContactContainer>
      </SectionWrapper>
    </>
  );
};
