'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import theme from '../../theme/theme';
import Button from '../ui/Button';

const NavContainer = styled.nav<{ $isVisible: boolean }>`
  background-color: ${theme.colors.secondary};
  padding: 0.875rem 1.5rem;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 19.876rem);
  margin: 0 9.938rem;
  position: fixed;
  top: ${props => props.$isVisible ? '3.875rem' : '-100px'};
  z-index: 1000;
  transition: top 0.3s ease-in-out;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

const NavLink = styled.a`
  color: ${theme.colors.white};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
  font-family: 'Pangram-Regular', sans-serif;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const Nav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        // Always show navbar at top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <NavContainer $isVisible={isVisible}>
      <LogoContainer>
        <Image
          src="/Logo/Aarasoft_Logo_White.svg"
          alt="Aarasoft Logo"
          width={124}
          height={24}
        />
      </LogoContainer>

      <NavLinks>
        <NavLink onClick={() => scrollToSection('hero')}>Home</NavLink>
        <NavLink onClick={() => scrollToSection('course')}>About Course</NavLink>
        <NavLink onClick={() => scrollToSection('programs')}>Modules</NavLink>
        <NavLink onClick={() => scrollToSection('contact')}>Contact Us</NavLink>
      </NavLinks>

      <Button
        text="Contact Us"
        bgColor={theme.colors.primary}
        textColor={theme.colors.secondary}
        iconSrc="/Logo/whatsappLogo.svg"
        iconAlt="WhatsApp"
        onClick={() => scrollToSection('contact')}
        width='10rem'
      />
    </NavContainer>
  );
};

export default Nav;