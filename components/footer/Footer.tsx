'use client';

import styled from 'styled-components'
import theme from '../../theme/theme'
import Button from '../ui/Button'

const FooterContainer = styled.footer`
  background-color: ${theme.colors.textColor};
  padding: 4rem 2.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 2.5rem 1.125rem 0;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4rem;

  @media (max-width: 1024px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 2rem;
  }

  @media (max-width: 580px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const Logo = styled.div`
  img {
    height: 2.5rem;
    width: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    img {
      height: 1.75rem;
    }
  }

  @media (max-width: 580px) {
    margin-bottom: 1.875rem;
    img {
      height: 1.5rem;
    }
  }
`;

const MiddleSection = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex: 1;
    min-width: 120px;
  }

  @media (max-width: 580px) {
    width: 100%;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterLink = styled.a`
  font-family: 'Pangram-Medium', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: ${theme.colors.white};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: ${theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    font-family: 'Pangram-Regular', sans-serif;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
`;

const ContactText = styled.p`
  font-family: 'Pangram-Medium', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: ${theme.colors.white};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    font-family: 'Pangram-Regular', sans-serif;
  }
`;

const FooterIcon = styled.img`
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
`;

const SocialIcon = styled.img`
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
`;

const FooterTextImage = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  align-self: center;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, rgba(163, 222, 172, 0) 0%, #A3DEAC 50.19%, rgba(163, 222, 172, 0) 100%);
  margin: 1.5rem 0;
`;

const MobileDivider = styled.div`
  display: none;

  @media (max-width: 580px) {
    display: block;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, rgba(163, 222, 172, 0) 0%, #A3DEAC 50.19%, rgba(163, 222, 172, 0) 100%);
  }
`;

export const Footer = () => {
    const WHATSAPP_URL = 'https://wa.me/919342242792';

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

                <MobileDivider />

                <MiddleSection>
                    <FooterColumn>
                        <FooterLink href="https://www.linkedin.com/in/designedbymanoj/" target="_blank" rel="noopener noreferrer">
                            <SocialIcon src="/Logo/linkedin.svg" alt="LinkedIn" />
                            LinkedIn
                        </FooterLink>
                        <FooterLink href="https://www.instagram.com/designedby_manoj?igsh=MWkxNHhudHN3ZDJ4NA==" target="_blank" rel="noopener noreferrer">
                            <SocialIcon src="/Logo/insta.svg" alt="Instagram" />
                            Instagram
                        </FooterLink>
                    </FooterColumn>
                </MiddleSection>

                <MobileDivider />

                <RightSection>
                    <ContactInfo>
                        <ContactText>
                            <FooterIcon src="/mobileresponsive/mail.svg" alt="Email" />
                            designedbymanoj@gmail.com
                        </ContactText>
                        <ContactText>
                            <FooterIcon src="/mobileresponsive/call.svg" alt="Phone" />
                            9342242792
                        </ContactText>
                    </ContactInfo>

                    <Button text="Join Course"
                        bgColor={theme.colors.primary}
                        textColor={theme.colors.secondary}
                        width="100%"
                        iconSrc="/Logo/whatsappLogo.svg"
                        iconAlt="WhatsApp"
                        onClick={() => window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')}/>
                </RightSection>
            </FooterContent>
            
            <FooterTextImage src="/Images/footerText.png" alt="Footer Text" />
        </FooterContainer>
    )
}
