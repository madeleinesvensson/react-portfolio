import { Tech } from "components/Tech";
import React from "react";
import styled from "styled-components";
import profileimg from "../assets/profileimg.jpg";
import { SectionWrapper } from "components/UI/SectionWrapper";

const Greeting = styled.span`
  color: orange;
  font-size: 35px;
  font-weight: 500;
  padding: 0px 10px 0px 0px;
`;
const AboutText = styled.p`
  font-size: 20px;
  font-weight: 300;
  padding: 0px;
  margin: 0px;
  color: #353535;
  max-width: 500px;
  text-align:left;
`;
const Heading = styled.h2`
  color: #264653;
  font-size: 30px;
  padding: 0px;
  text-align: left;
  border-bottom: 3px solid black;
`;

const ProfileImage = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  margin: 10px 0px 20px 0px;
`;
const CurrrentJob = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
width: 100%;
gap:10px;
text-align:center;
`

const CurrentJobEmployer = styled.p`
margin: 0px;
padding: 10px;
background-color:white ;
font-size:25px;

`

const CurrentJobText = styled.p`
margin: 0px;
padding: 10px;
background-color:white ;
font-size:18px;

`

export const Start = () => {
  return (
    <>
      <SectionWrapper>
        <ProfileImage src={profileimg} alt="profile" />
        <CurrrentJob>
        <AboutText>
          <Heading>Introduction</Heading>
          <Greeting>&lt;Hello&gt;</Greeting>
          I'm Madeleine, a creative Frontend Developer with a passion for (UX)
          design. Ten years ago I coded my first website with HTML and CSS.
          Today I'm building things I only dreamed of doing ten years ago, using
          JavaScript, React and Redux.
          <Greeting>&lt;/Hello&gt;</Greeting>
        </AboutText>

        <Tech />
          <CurrentJobText>
            Current employer
          </CurrentJobText>
          <CurrentJobEmployer>
            Folksam
          </CurrentJobEmployer>
        </CurrrentJob>
      </SectionWrapper>
    </>
  );
};
