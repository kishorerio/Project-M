import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import theme from '../../theme/theme'

const MentorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.6rem;
  margin: 0 2.5rem;
  position: relative;
  margin-bottom: 9.728rem;
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  height: 25.148rem;
  transform: rotate(0deg);
  opacity: 1;
  border-radius: 1.476rem;
`;

const MentorImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/Images/mentorBg.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.5;
    z-index: 1;
    border-radius: 1.476rem;
  }
`;

const MentorImage = styled(Image)`
  position: relative;
  z-index: 2;
  object-fit: cover;
`;

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
`;

const MentorName = styled.h3`
  font-family: 'Pangram-Bold', sans-serif;
  font-weight: 400;
  font-size: 1.625rem;
  color: ${theme.colors.primary};
  margin: 0 0 0.25rem 0;    
`;

const MentorRole = styled.p`
  font-family: 'Pangram-Medium', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  color: ${theme.colors.secondary};
  margin: 0;
`;

const RightSection = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h2`
  font-family: 'Pangram-Regular', sans-serif;
  font-weight: 600;
  font-size: 3.375rem;
  line-height: 120%;
  color: ${theme.colors.secondary};
  margin: 0 0 1rem 0;

  span {
    color: ${theme.colors.primary};
  }
`;

const Description = styled.p`
  font-family: 'Pangram-Regular', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 160%;
  color: ${theme.colors.secondaryTextColor};
  margin: 0 0 1.5rem 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 4.063rem;
  margin-top: 1rem;
`;

const InstagramIcon = styled.a`
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
`;

const LinkedInIcon = styled.a`
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
`;

export const MentorProfile = () => {
  return (
    <MentorContainer>
      <LeftSection>
        <MentorImageContainer>
          <MentorImage
            src="/Images/mentorPic.png"
            alt="Manoj Kumar - UI/UX Designer"
            width={330}
            height={480}
          />
          <MentorCard>
            <MentorName>Manoj Kumar</MentorName>
            <MentorRole>(UI/UX Designer)</MentorRole>
          </MentorCard>
        </MentorImageContainer>
      </LeftSection>

      <RightSection>
        <Title>Meet Your <span>Mentor</span></Title>
        
        <Description>
          Hi, I'm Manoj Kumar, a UI/UX Designer with 4+ years of experience working on real-world 
          products like ERP systems, mobile apps, and business platforms. I started my journey just 
          like many beginners—confused, exploring, and trying to understand how design actually 
          works in the real world.
        </Description>

        <Description>
          That's exactly why I created Aarasoft Academy to guide you step-by-step with practical 
          learning, real projects, and honest feedback so you can become a confident UX/UI 
          designer with a strong portfolio.
        </Description>

        <SocialLinks>
          <InstagramIcon href="#" target="_blank">
            <Image
              src="/Logo/insta.svg"
              alt="Instagram"
              width={40}
              height={40}
            />
          </InstagramIcon>
          <LinkedInIcon href="#" target="_blank">
            <Image
              src="/Logo/linkedin.svg"
              alt="LinkedIn"
              width={40}
              height={40}
            />
          </LinkedInIcon>
        </SocialLinks>
      </RightSection>
    </MentorContainer>
  )
}