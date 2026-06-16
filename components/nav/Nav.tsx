'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import theme from '../../theme/theme';
import Button from '../ui/Button';

const NavContainer = styled.nav<{ $isVisible: boolean }>`
  background-color: ${theme.colors.secondary};
  padding: 0.875rem 1.5rem;

  @media (max-width: 580px) {
    padding: 0.5rem 1rem;
  }
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 19.876rem);
  margin: 0 9.938rem;
  position: fixed;
  top: ${props => props.$isVisible ? '1.875rem' : '-100px'};
  z-index: 1000;
  transition: top 0.3s ease-in-out;

  @media (max-width: 1280px) {
    width: calc(100% - 8rem);
    margin: 0 4rem;
  }

  @media (max-width: 1024px) {
    width: calc(100% - 4rem);
    margin: 0 2rem;
    border-radius: 50px;
  }

  @media (max-width: 768px) {
    width: calc(100% - 2rem);
    margin: 0 1rem;
    top: ${props => props.$isVisible ? '1rem' : '-100px'};
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    @media (max-width: 580px) {
      width: 80px !important;
      height: auto !important;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 1024px) {
    display: none;
  }
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

const DesktopButton = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  color: ${theme.colors.white};

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 1024px) {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1100;
    opacity: ${props => props.$isOpen ? 1 : 0};
    pointer-events: ${props => props.$isOpen ? 'all' : 'none'};
    transition: opacity 0.3s ease;
  }
`;

const Sidebar = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: ${props => props.$isOpen ? '0' : '-320px'};
    width: 280px;
    height: 100vh;
    background-color: ${theme.colors.secondary};
    z-index: 1200;
    padding: 2rem 1.5rem;
    transition: left 0.3s ease-in-out;
    gap: 0;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${theme.colors.white};
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SidebarLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
`;

const SidebarLink = styled.a`
  color: ${theme.colors.white};
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 500;
  cursor: pointer;
  font-family: 'Pangram-Regular', sans-serif;
  transition: color 0.3s ease;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const Nav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const WHATSAPP_URL = 'https://wa.me/919834877006';

  const scrollToSection = (sectionId: string) => {
    setIsSidebarOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isSidebarOpen]);

  return (
    <>
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
          <NavLink href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Contact Us</NavLink>
        </NavLinks>

        <DesktopButton>
          <Button
            text="Contact Us"
            bgColor={theme.colors.primary}
            textColor={theme.colors.secondary}
            iconSrc="/Logo/whatsappLogo.svg"
            iconAlt="WhatsApp"
            onClick={() => window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')}
            width='10rem'
          />
        </DesktopButton>

        <HamburgerButton onClick={() => setIsSidebarOpen(true)} aria-label="Open menu">
          <img src="/mobileresponsive/hamburger.svg" alt="Menu" width={28} height={28} />
        </HamburgerButton>
      </NavContainer>

      {/* Overlay */}
      <Overlay $isOpen={isSidebarOpen} onClick={() => setIsSidebarOpen(false)} />

      {/* Sidebar */}
      <Sidebar $isOpen={isSidebarOpen}>
        <SidebarHeader>
          <Image
            src="/Logo/Aarasoft_Logo_White.svg"
            alt="Aarasoft Logo"
            width={100}
            height={20}
          />
          <CloseButton onClick={() => setIsSidebarOpen(false)} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </CloseButton>
        </SidebarHeader>

        <SidebarLinks>
          <SidebarLink onClick={() => scrollToSection('hero')}>Home</SidebarLink>
          <SidebarLink onClick={() => scrollToSection('course')}>About Course</SidebarLink>
          <SidebarLink onClick={() => scrollToSection('programs')}>Modules</SidebarLink>
          <SidebarLink href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Contact Us</SidebarLink>
        </SidebarLinks>

        <Button
          text="Contact Us"
          bgColor={theme.colors.primary}
          textColor={theme.colors.secondary}
          iconSrc="/Logo/whatsappLogo.svg"
          iconAlt="WhatsApp"
          onClick={() => window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')}
          width='100%'
        />
      </Sidebar>
    </>
  );
};

export default Nav;
