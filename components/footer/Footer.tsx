'use client';

import React from 'react'
import styled from 'styled-components'
import theme from '../../theme/theme'
import Button from '../ui/Button'

const FooterContainer = styled.footer `
  background-color: ${
    theme.colors.textColor
};
  padding: 4rem 2.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;

const FooterContent = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4rem;
`;

const Logo = styled.div `
  img {
    height: 2.5rem;
    width: auto;
  }
`;

const MiddleSection = styled.div `
  display: flex;
`;

const FooterColumn = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterLink = styled.a `
  font-family: 'Pangram-Medium', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  color: ${
    theme.colors.white
};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${
    theme.colors.primary
};
  }
`;

const RightSection = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
`;

const ContactInfo = styled.div `
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
`;

const ContactText = styled.p `
  font-family: 'Pangram-Medium', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  color: ${
    theme.colors.white
};
  margin: 0;
`;

const FooterTextImage = styled.img `
  width: auto;
  height: auto;
  max-width: 100%;
  align-self: center;
`;

export const Footer = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <FooterContainer>
            <FooterContent>
                <Logo>
                    <img src="/Logo/Aarasoft_Logo_White.svg" alt="Aarasoft Logo"/>
                </Logo>

                <MiddleSection>
                    <FooterColumn>
                        <FooterLink onClick={() => scrollToSection('hero')}>Home</FooterLink>
                        <FooterLink onClick={() => scrollToSection('course')}>About Course</FooterLink>
                        <FooterLink onClick={() => scrollToSection('programs')}>Modules</FooterLink>
                        <FooterLink onClick={() => scrollToSection('contact')}>Contact Us</FooterLink>
                    </FooterColumn>
                </MiddleSection>
                <MiddleSection>

                    <FooterColumn>
                        <FooterLink href="https://linkedin.com" target="_blank">LinkedIn</FooterLink>
                        <FooterLink href="https://instagram.com" target="_blank">Instagram</FooterLink>
                    </FooterColumn>
                </MiddleSection>

                <RightSection>
                    <ContactInfo>
                        <ContactText>designedbymanoj@gmail.com</ContactText>
                        <ContactText>9342242792</ContactText>
                    </ContactInfo>

                    <Button text="Join Course"
                        bgColor={
                            theme.colors.primary
                        }
                        textColor={
                            theme.colors.secondary
                        }
                        width="269px"
                        iconSrc="/Logo/whatsappLogo.svg"
                        iconAlt="WhatsApp"
                        onClick={() => scrollToSection('contact')}/>
                </RightSection>
            </FooterContent>
            
            <FooterTextImage src="/Images/footerText.png" alt="Footer Text" />
        </FooterContainer>
    )
}
