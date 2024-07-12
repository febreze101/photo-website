import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;

    li {
      margin: 0 15px;
    }
  }
`;

const Header = () => (
  <HeaderContainer>
    <h1>Logo</h1>
    <Nav>
      <ul>
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </Nav>
  </HeaderContainer>
);

export default Header;
