import { Tech } from "components/Tech";
import React from "react";
import styled from "styled-components";
import profileimg from "../assets/profileimg.jpg";

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
`;

const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px;
  justify-content: center;
  flex-direction: column;
`;

const ProfileImage = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  margin: 10px 0px 20px 0px;
`;

export const Start = () => {
  return (
    <>
      <SectionWrapper>
        <ProfileImage src={profileimg} alt="profile" />
        <AboutText>
          <Greeting>&lt;Hello&gt;</Greeting>
          I'm Madeleine, a creative Frontend Developer with a passion for (UX)
          design. Ten years ago I coded my first website with HTML and CSS.
          Today I'm building things I only dreamed of doing ten years ago, using
          JavaScript, React and Redux.
          <Greeting>&lt;/Hello&gt;</Greeting>
        </AboutText>

        <Tech />
      </SectionWrapper>
    </>
  );
};
