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
`;

const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  height: 100px;
  width: 100px;
  object-fit: cover;
`;

export const Start = () => {
  return (
    <>
      <SectionWrapper>
        <AboutText>
          <Greeting>&lt;Hello&gt;</Greeting>
          I'm Madeleine, a creative Frontend Developer with a passion for (UX)
          design. Ten years ago I coded my first website with HTML and CSS.
          Today I'm building things I only dreamed of doing ten years ago, using
          JavaScript, React and Redux.<Greeting>&lt;/Hello&gt;</Greeting>
        </AboutText>
        <ProfileImage src={profileimg} alt="profile" />
      </SectionWrapper>
    </>
  );
};
