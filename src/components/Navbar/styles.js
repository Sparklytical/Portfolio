import styled from 'styled-components';
import { Link } from 'gatsby';
import 'typeface-nunito';

export const Logo = styled.span`
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  font-size: 1.25rem;
  font-weight: 700;
  margin-left: 0.75rem;
  letter-spacing: 0.15em;
  color: rgb(255, 255, 255);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  width: -webkit-fill-available;

  a {
    color: rgb(255, 255, 255);
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
  align-items: center;
  text-decoration: none;
  flex-direction: row;
  svg {
    height: 2.5rem;
    margin-bottom: 0;
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  -webkit-box-pack: end;
  font: 18px Nunito;
  justify-content: flex-end;
  -webkit-box-align: center;
  align-items: center;
  margin: 0 50px;
  font-weight: 400;
  word-wrap: break-word;
  font-kerning: normal;
  font-feature-settings: 'kern', 'liga', 'clig', 'calt';
`;
