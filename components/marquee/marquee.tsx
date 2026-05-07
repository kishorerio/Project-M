import theme from '@/theme/theme';
import React from 'react'
import styled, { keyframes } from 'styled-components'

const scroll = keyframes`
  0% {
    transform: translateX(10%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Wrap = styled.div`
  padding: 1.75rem 0;
  background-color: ${theme.colors.primary};
  width: 100%;
  overflow: hidden;
  margin-bottom: 6.25rem;

  @media (max-width: 768px) {
    padding: 1.25rem 0;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 0;
    margin-bottom: 2rem;
  }

  @media (max-width: 320px) {
    padding: 0.75rem 0;
  }
`;

const MarqueeContent = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  animation: ${scroll} 20s linear infinite;
`;

const MarqueeText = styled.span`
  font-family: 'Pangram-Bold', sans-serif;
  font-weight: 700;
  font-size: 1.875rem;
  color: ${theme.colors.secondary};
  margin: 0 2rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin: 0 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin: 0 1rem;
  }

  @media (max-width: 320px) {
    font-size: 0.875rem;
    margin: 0 0.75rem;
  }
`;

const Dot = styled.span`
  font-size: 2.5rem;
  color: ${theme.colors.white};
  margin: 0;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }

  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;

export const Marquee = () => {
  const texts = [
    "Build Job-Ready Portfolio",
    "1:1 Personal Mentorship", 
    "Freelance Mentorship",
    "No Coding Required"
  ];

  return (
    <Wrap>
      <MarqueeContent>
        {Array(3).fill(null).map((_, index) => (
          <React.Fragment key={index}>
            {texts.map((text, textIndex) => (
              <React.Fragment key={`${index}-${textIndex}`}>
                <MarqueeText>{text}</MarqueeText>
                <Dot>&bull;</Dot>
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </MarqueeContent>
    </Wrap>
  )
}
