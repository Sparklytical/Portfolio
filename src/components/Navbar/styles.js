import styled from "styled-components";
import { Link } from "gatsby";
import "typeface-nunito";

export const Logo = styled.img`
  height: 40px;
  width: auto;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;

  a {
    color: #000;
    margin-left: 2rem;
    transition: all 0.4s ease 0s;
    &:hover {
      color: #7d7f81;
    }
    &:focus {
      color: #7d7f81;
    }
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
  text-decoration: none;
  flex-direction: row;
  svg {
    height: 2.5rem;
    margin-bottom: 0;
  }
`;

export const NavLinkContainer = styled.div`
  font-family: "Nunito";
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  align-items: center;
`;
