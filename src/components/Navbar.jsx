import React, { Fragment } from 'react';
import styled, { css } from 'styled-components/macro';
import { useGlobalContext } from '../context';

import { FaBars } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import Alert from './Alert';
const Navbar = ({ toggle }) => {
  const { logout, isAuthenticated, loading } = useGlobalContext();
  const authLinks = (
    <Fragment>
      {/* <NavMenuLinks onClick={() => logout()} href="#!">
        Logout
      </NavMenuLinks> */}
      <Button onClick={logout}>Logout</Button>
      <NavMenuLinks to="/covid">see data</NavMenuLinks>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <NavMenuLinks to="/login">Login</NavMenuLinks>
      <NavMenuLinks to="/">Sign Up</NavMenuLinks>
    </Fragment>
  );
  return (
    <Fragment>
      <Nav>
        <Logo to="/">Velyvx</Logo>
        <MenuBars onClick={toggle} />
        <NavMenu>
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </NavMenu>
      </Nav>
      <Alert />
    </Fragment>
  );
};
export default Navbar;

const Nav = styled.nav`
  height: 60px;
  /* background-color: #000; */
  display: flex;
  justify-content: space-around;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
`;
const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 17px;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.4s;
  &:hover {
    border-bottom: 2px solid red;
  }
`;

const Logo = styled(Link)`
  ${NavLink};
  font-style: italic;
`;

const MenuBars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    color: #fff;
    width: 40px;
    cursor: pointer;
    height: 40px;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.button`
  background: #333;
  white-space: no-wrap;
  outline: none;
  border: none;
  min-width: 100px;
  text-decoration: none;
  max-width: 200px;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
  color: #ffffff;
  font-size: ${({ big }) => (big ? '20px' : '14px')};
`;
