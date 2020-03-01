import styled from "styled-components";
import { Link } from "gatsby";

export const Logo = styled.img`
  height: 40px;
  width: auto;
`;

export const Nav = styled.nav`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: row;
  padding: 1rem 1.5rem;
  background: transparent;
  font-family: "Nunito";
  /* background: linear-gradient(45deg, rgb(38, 44, 65) 0%, rgb(70, 80, 122) 100%); */
`;

export const NavLink = styled(Link)`
  color: #fff;
  margin-left: 2rem;
  transition: all 0.4s ease 0s;
  text-decoration: none;

  &:hover {
    color: rgb(38, 44, 65);
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  -webkit-box-align: center;
  align-items: center;
`;
