import { Skills } from "components/Skills";
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
const ProjectContainter = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 95%;
  max-width: 500px;
  margin: 10px 0px;
  padding-bottom: 10px;
  a {
    text-decoration: none;
  }
`;

const Title = styled.h3`
  font-size: 30px;
  color: #353535;
  text-align: center;
  margin: 0px;
  font-weight: 200;
`;
const Description = styled.p`
  font-size: 20px;
  color: #353535;
  font-weight: 200;
  padding: 5px;
  margin: 5px 0px;
`;
const ArticleImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
export const About = () => {
  return (
    <>
      <SectionWrapper>
        <ProjectContainter>
          <Title>About me</Title>
          <Description>
            My name is Madeleine and I am a frontend developer with a bootcamp
            and a two year UX design diploma in my backpack. I code and build
            applications and websites where I use my interest and knowledge of
            UX as a guide when I code(and design). Since high school I have
            thought that coding was the coolest thing you can do. And now I code
            too. A few years ago I thought about my future self about where was
            I going to be five years from now. That made me realize I needed a
            change because where I was now, was not where I envisioned myself in
            the future.
          </Description>
          <Description>
            Having the conversation with myself, I realized that my current
            workplace was not the right fit for me. I was not built to do the
            job I had and I was constantly frustrated, overworked and injured or
            sick. I didn’t feel like my self at all and knew I needed a change
            in my life for me to be my old self again, the girl who was strong
            and healthy with loads of energy.
          </Description>
          <Description>
            The turning point and my way back to my old self was realizing what
            I wanted to do five years from now and that was to become an UX
            designer. Even if that is not where I ended up it’s where I
            rediscovered coding and it’s power. UX was what lead me to where I
            am today, having found the thing I love to do where I finally feel
            like the things I do matter. Around that time I also got diagnosed
            with Celiacs disease and that changed my life, for both the good and
            the bad. I now have more energy and are healthier than ever. The
            symptoms I had at my old job made sense and I have a greater
            understanding of why I was feeling so low before thanks to my
            diagnosis.
          </Description>
          <Description>
            {" "}
            I have found a way back to myself I can now put my focus on the
            things that I enjoy and one of those things is coding. Coding has
            always been something I thought was a cool thing to know. Now that I
            understand and can write it myself, I also understand the power it
            has and what important things you can do with it. You can help
            people in need, do something to make the planet better and leave
            your mark on the world. Isn’t that all we want, to feel like we made
            a difference for someone?
          </Description>
        </ProjectContainter>
      </SectionWrapper>
      <Skills />
    </>
  );
};
