import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Close from "../assets/close.png";
import Open from "../assets/menu.png";

const HamburgerNav = styled.div`
  background-position: center;
  cursor: pointer;
  background-repeat: no-repeat;
  align-self: center;
  background-size: 30px;
  position: relative;
  width: 60px;
  height: 60px;
  margin-right: 20px;
  &.toggle {
    background-image: url(${Open});
    z-index: 10;
  }
  &.toggle-active {
    background-image: url(${Close});
    z-index: 30;
  }
`;

const PopUpNav = styled.nav`
  &.side-menu-active {
    position: fixed;
    z-index: 20;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    background: black;
    justify-content: center;
    background-color: #289d8e;
    @media (min-width: 768px) {
      width: 250px;
    }
  }
  &.side-menu-hidden {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  padding: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

export const Navigation = () => {
  const [isNavigationActive, setNavigationActive] = useState(false);
  const toggleNavigation = () => {
    setNavigationActive(!isNavigationActive);
  };

  return (
    <>
      <HamburgerNav
        className={isNavigationActive ? "toggle-active" : "toggle"}
        onClick={toggleNavigation}
      ></HamburgerNav>
      <PopUpNav
        className={isNavigationActive ? "side-menu-active" : "side-menu-hidden"}
        onClick={toggleNavigation}
      >
        <StyledLink to="/">Start</StyledLink>
        <StyledLink to="/about">Madeleine</StyledLink>
        <StyledLink to="/projects">Projects</StyledLink>
        <StyledLink to="/articles">Articles</StyledLink>
      </PopUpNav>
    </>
  );
};
