import React from 'react';
import Headroom from 'react-headroom';
// import styled from "styled-components";
// import LogoImg from '../../img/white_logo.png';
import { Logo, Nav, NavLink, NavLinkContainer } from './styles';
import LogoImg from '../../img/logo';
const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            });
      },
    );
  };

  render() {
    return (
      <Headroom
        style={{
          webkitTransition: 'all .5s ease-in-out',
          mozTransition: 'all .5s ease-in-out',
          oTransition: 'all .5s ease-in-out',
          transition: 'all .5s ease-in-out',
        }}
      >
        <Nav
          className="navbar is-transparent"
          role="navigation"
          aria-label="main-navigation"
        >
          <div className="navbar-brand">
            <NavLink to="/" className="navbar-item" title="Logo">
              <LogoImg />
              <Logo className="logoImg">EvilSpark</Logo>
            </NavLink>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="button"
              tabIndex={0}
              onClick={() => this.toggleHamburger()}
              onKeyDown={() => this.toggleHamburger()}
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
          </NavLinkContainer>
        </Nav>
      </Headroom>
    );
  }
};

export default Navbar;
