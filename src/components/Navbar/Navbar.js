import React from "react";
import Headroom from "react-headroom";
import "typeface-nunito";
// import styled from "styled-components";
import LogoImg from "../../img/EvilSpark.png";
import { Logo, Nav, NavLink, NavLinkContainer } from "./styles";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <Headroom>
        <Nav
          className="navbar is-transparent"
          role="navigation"
          aria-label="main-navigation"
        >
          <div className="navbar-brand">
            <NavLink to="/" className="navbar-item" title="Logo">
              <Logo src={LogoImg} alt="Logo" />
            </NavLink>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <NavLinkContainer
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <NavLink className="navbar-item" to="/about">
                About
              </NavLink>

              <NavLink className="navbar-item" to="/blog">
                Blog
              </NavLink>
              <NavLink className="navbar-item" to="/contact">
                Contact
              </NavLink>
              <NavLink className="navbar-item" to="/contact/examples">
                Form Examples
              </NavLink>
            </div>
          </NavLinkContainer>
        </Nav>
      </Headroom>
    );
  }
};

export default Navbar;
