'use client';

import { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import Image from 'next/image'
import theme from '../../theme/theme'

const MentorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.6rem;
  margin: 0 2.5rem;
  position: relative;
  margin-bottom: 9.728rem;
  margin-top: 8.728rem;

  @media (max-width: 960px) {
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 1.5rem;
    margin: 0 2rem 6rem;
  }

  @media (max-width: 768px) {
    margin: 0 1.125rem 4rem;
  }

  @media (max-width: 480px) {
    margin: 0 1rem 3rem;
  }

  @media (max-width: 320px) {
    margin: 0 0.75rem 2.5rem;
    gap: 1rem;
  }
`;

const MobileTitle = styled.h2`
  display: none;
  font-family: 'Pangram-Regular', sans-serif;
  font-weight: 600;
  line-height: 120%;
  color: ${theme.colors.secondary};
  margin: 0;
  width: 100%;

  span {
    color: ${theme.colors.primary};
  }

  @media (max-width: 960px) {
    display: block;
    font-size: 2rem;
    order: -1;
  }

  @media (max-width: 320px) {
    font-size: 1.5rem;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  height: 25.148rem;
  border-radius: 1.476rem;

  @media (max-width: 960px) {
    width: 100%;
    height: 22rem;
    flex: none;
  }

  @media (max-width: 768px) {
    height: 20rem;
  }

  @media (max-width: 480px) {
    height: 17rem;
  }

  @media (max-width: 320px) {
    height: 14rem;
    width: 100%;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const MentorImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  padding: 10px;
  border-radius: 1.476rem;
  overflow: hidden;
`;

const SlideImage = styled.div<{ $visible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 1.476rem;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  z-index: 1;
`;

// const MentorImage = styled(Image)`
//   position: relative;
//   z-index: 2;
//   object-fit: cover;
//   width: 100% !important;
//   height: auto !important;
//   max-width: 330px;
// `;

const MentorCard = styled.div`
  background-color: ${theme.colors.white};
  padding: 1rem;
  border-radius: 7.78px;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  width: 14.938rem;
  z-index: 3;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  @media (max-width: 480px) {
    width: 11rem;
    padding: 0.75rem;
    bottom: 0.75rem;
    left: 0.75rem;
  }

  @media (max-width: 320px) {
    width: 9rem;
    padding: 0.5rem;
  }
`;

const MentorName = styled.h3`
  font-family: 'Pangram-Bold', sans-serif;
  font-weight: 400;
  font-size: 1.625rem;
  color: ${theme.colors.primary};
  margin: 0 0 0.25rem 0;

  @media (max-width: 480px) {
    font-size: 1.125rem;
  }

  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;

const MentorRole = styled.p`
  font-family: 'Pangram-Medium', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  color: ${theme.colors.secondary};
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const RightSection = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 960px) {
    display: none;
  }
`;

const DescriptionSection = styled.div`
  display: none;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 960px) {
    display: flex;
    width: 100%;
  }
`;

const Title = styled.h2`
  font-family: 'Rightgrotesk-widemedium', sans-serif;
  letter-spacing: 0.5px;
  font-weight: 500;
  font-size: 3.375rem;
  line-height: 120%;
  color: ${theme.colors.secondary};
  margin: 0 0 1rem 0;

  span {
    color: ${theme.colors.primary};
  }

  @media (max-width: 960px) {
    display: none;
  }
`;

const Description = styled.p`
  font-family: 'Pangram-Regular', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 160%;
  color: ${theme.colors.secondaryTextColor};
  margin: 0 0 1.5rem 0;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 0 0 1rem 0;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }

  @media (max-width: 320px) {
    font-size: 0.8125rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 4.063rem;
  margin-top: 1rem;

  @media (max-width: 480px) {
    gap: 2rem;
    margin-top: 0.5rem;
  }

  @media (max-width: 320px) {
    gap: 1.5rem;
  }
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
  }

  @media (max-width: 320px) {
    width: 32px;
    height: 32px;
  }
`;

const MENTOR_IMAGES = ['/Images/fullmentor.svg', '/Images/fullmentor2.svg'];
const SLIDE_INTERVAL = 3000;

export const MentorProfile = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % MENTOR_IMAGES.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <MentorContainer>
      {/* Mobile title - shows above image on small screens */}
      <MobileTitle>Meet Your <span>Mentor</span></MobileTitle>

      <LeftSection>
        <MentorImageContainer>
          {MENTOR_IMAGES.map((src, i) => (
            <SlideImage
              key={src}
              $visible={i === activeIndex}
              style={{ backgroundImage: `url('${src}')` }}
            />
          ))}
          <MentorCard>
            <MentorName>Manoj Kumar</MentorName>
            <MentorRole>(UI/UX Designer)</MentorRole>
          </MentorCard>
        </MentorImageContainer>
      </LeftSection>

      <RightSection>
        <Title>Meet Your <span>Mentor</span></Title>
        
        <Description>
          Hi, I&apos;m Manoj Kumar, a UI/UX Designer with 4+ years of experience working on real-world 
          products like ERP systems, mobile apps, and business platforms. I started my journey just 
          like many beginners—confused, exploring, and trying to understand how design actually 
          works in the real world.
        </Description>

        <Description>
          That&apos;s exactly why I created Aarasoft Academy to guide you step-by-step with practical 
          learning, real projects, and honest feedback so you can become a confident UX/UI 
          designer with a strong portfolio.
        </Description>

        <SocialLinks>
          <SocialIcon href="https://www.instagram.com/designedby_manoj?igsh=MWkxNHhudHN3ZDJ4NA==" target="_blank" rel="noopener noreferrer">
            <Image src="/Logo/insta.svg" alt="Instagram" width={40} height={40} />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/designedbymanoj/" target="_blank" rel="noopener noreferrer">
            <Image src="/Logo/linkedin.svg" alt="LinkedIn" width={40} height={40} />
          </SocialIcon>
        </SocialLinks>
      </RightSection>

      {/* Descriptions below image on mobile */}
      <DescriptionSection>
        <Description>
          Hi, I&apos;m Manoj Kumar, a UI/UX Designer with 4+ years of experience working on real-world 
          products like ERP systems, mobile apps, and business platforms. I started my journey just 
          like many beginners—confused, exploring, and trying to understand how design actually 
          works in the real world.
        </Description>

        <Description>
          That&apos;s exactly why I created Aarasoft Academy to guide you step-by-step with practical 
          learning, real projects, and honest feedback so you can become a confident UX/UI 
          designer with a strong portfolio.
        </Description>

        <SocialLinks>
          <SocialIcon href="https://www.instagram.com/designedby_manoj?igsh=MWkxNHhudHN3ZDJ4NA==" target="_blank" rel="noopener noreferrer">
            <Image src="/Logo/insta.svg" alt="Instagram" width={40} height={40} />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/designedbymanoj/" target="_blank" rel="noopener noreferrer">
            <Image src="/Logo/linkedin.svg" alt="LinkedIn" width={40} height={40} />
          </SocialIcon>
        </SocialLinks>
      </DescriptionSection>
    </MentorContainer>
  )
}
