"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import {
  BiMenuAltLeft,
  BiUser,
  BiShoppingBag,
  BiX,
  BiHeart,
} from "react-icons/bi";

// Styles (styled-components)
const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 2%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: #f3f3f3;
  box-shadow: 0 2px 10px rgba(146, 144, 144, 0.1);

  @media (max-width: 400px) {
    padding: 20px 0;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`;

const NavLink = styled.a`
  color: var(--color-text-primary);
  text-decoration: none;
  font-size: 18px;
  font-weight: 400px;
  letter: 2px;

  &:hover {
    color: var(--color-text-secondary);
  }

  @media (max-width: 400px) {
    display: none;
  }
`;

const Logo = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const RightSectionRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const RightSectionLeft = styled.div`
  display: flex;
  align-items: center;
`;

const IconButtonUser = styled.button`
  background: var(--color-background-hover);
  color: white;
  border: none;
  cursor: pointer;
  padding: 4px 7px;
  position: relative;
  border-radius: 50%;
  border: 1px solid black;
  
  &:hover {
    background-color: transparent;
    color: black;
    border: 1px solid black;
    border-radius: 50%;
  }
`;

const IconButtonFavori = styled.button`
  background: var(--color-background-hover);
  color: white;
  border: none;
  cursor: pointer;
  padding: 8px;
  position: relative;
  border-radius: 50%;
  border: 1px solid black;
  
  &:hover {
    background-color: transparent;
    color: black;
    border: 1px solid black;
    border-radius: 50%;
  }
  @media (max-width: 400px) {
    display: none;
  }
`;

const IconButtonBag = styled.button`
  background: none;
  color: black;
  cursor: pointer;
  padding: 8px;
  position: relative;
  border-radius: 50%;
  border: 1px solid black;
  
  &:hover {
    background-color: var(--color-background-hover);
    color: white;
    border: 1px solid white;
    border-radius: 50%;
  }
`;

const IconButtonCart = styled.button`
  background: black;
  color: white;
  cursor: pointer;
  padding: 10px 20px;
  position: relative;
  border-radius: 16px;
  border: 1px solid black;
  
  &:hover {
    background-color: transparent;
    color: black;
    border: 1px solid black;
    border-radius: 16px;
  }

  @media (max-width: 400px) {
    display: none;
  }
`;

const IconButtonMenu = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  position: relative;
  border-radius: 50%;
  
  &:hover {
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const MobileMenu = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: ${({ $isOpen }) => $isOpen ? '0' : '-100%'};
    width: 70%;
    height: 100%;
    background-color: white;
    z-index: 1001;
    transition: left 0.3s ease-in-out;
    box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  }
`;

const MobileNavLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
    margin-top: 60px;

    & > a {
      display: block;
      color: var(--color-text-primary);
      text-decoration: none;
      font-size: 18px;
      padding: 10px 0;
      border-bottom: 1px solid #eee;

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        color: var(--color-text-secondary);
      }
    }
  }
`;

// Composant Navbar (en JavaScript)
const Navbar = ({ homePath = "/" }) => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleHomeClick = () => {
    router.push(homePath);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <NavContainer>
        <LeftSection>
          <IconButtonMenu onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <BiX size={44} /> : <BiMenuAltLeft size={35} />}
          </IconButtonMenu>

          <NavLinks>
            <NavLink href="#" onClick={handleHomeClick}>
              Home
            </NavLink>
            <NavLink href="#">Collections</NavLink>
            <NavLink href="#">New</NavLink>
          </NavLinks>
        </LeftSection>

        <Logo>
          <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 5V19L2 12L12 5Z" fill="#E5E5E5" />
            <path d="M12 5V19L22 12L12 5Z" fill="#000000" />
          </svg>
        </Logo>

        <RightSection>
          <IconButtonFavori>
            <BiHeart size={24} />
          </IconButtonFavori>
          <RightSectionLeft>
            <IconButtonCart>Cart</IconButtonCart>
            <IconButtonBag>
              <BiShoppingBag size={24} />
            </IconButtonBag>
          </RightSectionLeft>

          <RightSectionRight>
            <IconButtonUser as="a" href="/connexion">
              <BiUser size={24} />
            </IconButtonUser>
          </RightSectionRight>
        </RightSection>
      </NavContainer>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        <MobileNavLinks>
          <NavLink href="#" onClick={handleHomeClick}>
            Home
          </NavLink>
          <NavLink href="#">Collections</NavLink>
          <NavLink href="#">New</NavLink>
        </MobileNavLinks>
      </MobileMenu>
    </>
  );
};

export default Navbar;
