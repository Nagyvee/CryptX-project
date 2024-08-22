import React, { useState } from "react";
import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoImg from "../assets/logo.svg";
import { MdDashboard } from "react-icons/md";
import { BiWallet } from "react-icons/bi";
import { FaTimes, FaBars } from "react-icons/fa";
import {
  FiPieChart,
  FiMail,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { SignOutButton, SignedOut, useClerk } from '@clerk/clerk-react';

const SidebarContainer = styled.div`
  width: 180px;
  height: 100vh;
  background: #F3F3F3;
  display: flex;
  z-index: 100;
  flex-direction: column;
  padding: 1.8rem 0.5rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: transform 0.3s ease;

  @media (max-width: 975px) {
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100%)"};
    position: fixed;
    z-index: 100;
    height: 100%;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  margin-left: .85rem;


  h2{
  font-size: 1.2rem;
  margin-left: .5rem;
  }
`;

const Logo = styled.img`
  width: auto;
  height: auto;
  border-radius: 4px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

    .active{
     color: #5a67d8;
     position: relative;

     &::after{
     content: '';
     position: absolute;
     right: .4rem;
     width: 7.5px;
     height: 7.5px;
     background-color: #5a67d8;
     border-radius: 50%;
     }

     .logout{
        color: red;
        width: 200px;
     }
}
`;

const NavItem = styled.li`
  display: flex;
  font-size: 0.9rem;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  padding: .75rem 0.55rem;
  margin-bottom: 1.2rem;
  cursor: pointer;
  border-radius: 0.5rem;
  transition: background 0.2s;
  position: relative;
  color: #555;
  font-weight: 450;

  span {
    position: absolute;
    left: 24%;
  }


  &:hover {
    color: #5a67d8;
    transform: scale(1.01);
  }
  }


`;

const ToggleButton = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 1001;
  background: #5a67d8;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #4c51bf;
  }

  @media (min-width: 975px) {
    display: none;
  }
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  const LogoutUser = () => {
    const clerk = useClerk();

    const handleLogout = async () =>{
      try {
        await clerk.signOut();
        console.log('Logged out')
      } catch (error) {
        console.log(error)
      }
    }

    return(

      <NavItem onClick={handleLogout}>
        <FiLogOut /> 
        <span>Logout</span>
      </NavItem>
    )

  }

  return (
    <>
      <ToggleButton onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </ToggleButton>
      <SidebarContainer isOpen={isOpen}>
        <LogoContainer>
          <Logo src={LogoImg} alt="Logo image" />
          <h2>CryptX</h2>
        </LogoContainer>
        <NavList>
          <NavItem  className="active">
            <MdDashboard />
            <span>Overview</span>
          </NavItem>

          <NavItem
            onClick={() => {
              toggleSidebar();
            }}
          >
            <FiPieChart />
            <span>Chart</span>
          </NavItem>

          <NavItem onClick={toggleSidebar}>
            <BiWallet />
            <span>Wallet</span>
          </NavItem>

          <NavItem onClick={toggleSidebar}>
            <FiMail />
            <span>Mail Box</span>
          </NavItem>

          <NavItem onClick={toggleSidebar}>
            <FiSettings />
            <span>Setting</span>
          </NavItem>
          <LogoutUser />

          <div>
      {/* <UserButton /> */}
    </div>
        </NavList>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
