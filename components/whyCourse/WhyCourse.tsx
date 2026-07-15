'use client';

import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import theme from '../../theme/theme'
import Button from '../ui/Button'

const WhyCourseContainer = styled.section`
  padding: 0 2.5rem;
  background-color: ${theme.colors.white};
  margin: 0 auto;
  height: 400vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 1.125rem;
  }

  @media (max-width: 320px) {
    padding: 0 0.75rem;
  }
`;

const StickyWrapper = styled.div`
  position: sticky;
  top: 0;
  height: 130vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.white};
  z-index: 10;

  @media (max-width: 768px) {
    height: 100vh;
    justify-content: center;
    padding: 2rem 0;
  }
`;

const Title = styled.h2`
  font-family: 'Rightgrotesk-widemedium', sans-serif;
  letter-spacing: 0.5px;
  font-size: 3.375rem;
  color: ${theme.colors.textColor};
  margin: 0 0 1rem 0;
  line-height: 1.2;
  text-align: center;
  
  .highlight {
    color: ${theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }

  @media (max-width: 320px) {
    font-size: 1.5rem;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40.0625rem;
  padding-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 28rem;
    padding-top: 2rem;
  }

  @media (max-width: 480px) {
    height: 24rem;
  }

  @media (max-width: 320px) {
    height: 20rem;
    padding-top: 1rem;
  }
`;

const EllipsePath = styled.div`
  position: absolute;
  width: 72.125rem;
  height: 72.125rem;
  border: 2px solid #e5e5e5;
  border-bottom: none;
  border-radius: 50%;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%);
  clip-path: inset(0 0 50% 0);

  @media (max-width: 768px) {
    width: 40rem;
    height: 40rem;
    top: 2rem;
  }

  @media (max-width: 480px) {
    width: 30rem;
    height: 30rem;
  }

  @media (max-width: 320px) {
    width: 22rem;
    height: 22rem;
    top: 1rem;
  }
`;

const FadingLine = styled.div`
  position: absolute;
  width: 80%;
  max-width: 72.125rem;
  height: 2px;
  top: 40.0625rem;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(90deg, 
    transparent 0%, 
    #e5e5e5 15%, 
    #e5e5e5 85%, 
    transparent 100%
  );
  z-index: 5;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NumberCircle = styled.div<{ $isActive: boolean; $angle: number }>`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${props => props.$isActive ? theme.colors.primary : '#e5e5e5'};
  color: ${props => props.$isActive ? theme.colors.textColor : '#525252'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.25rem;
  left: 50%;
  top: 40.0625rem;
  transform: 
    translateX(-50%) 
    translateY(-50%)
    rotate(${props => props.$angle}deg) 
    translateY(-36.0625rem) 
    rotate(${props => -props.$angle}deg);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: ${props => props.$isActive ? 10 : 2};

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 0.875rem;
    top: 22rem;
    opacity: ${props => props.$isActive ? 1 : 0};
    pointer-events: ${props => props.$isActive ? 'auto' : 'none'};
    transform: 
      translateX(-50%) 
      translateY(-50%)
      rotate(${props => props.$angle}deg) 
      translateY(-20rem) 
      rotate(${props => -props.$angle}deg);
  }

  @media (max-width: 480px) {
    width: 38px;
    height: 38px;
    font-size: 0.75rem;
    top: 17rem;
    transform: 
      translateX(-50%) 
      translateY(-50%)
      rotate(${props => props.$angle}deg) 
      translateY(-15rem) 
      rotate(${props => -props.$angle}deg);
  }

  @media (max-width: 320px) {
    width: 32px;
    height: 32px;
    font-size: 0.6875rem;
    top: 12rem;
    transform: 
      translateX(-50%) 
      translateY(-50%)
      rotate(${props => props.$angle}deg) 
      translateY(-11rem) 
      rotate(${props => -props.$angle}deg);
  }
`;

const ContentCard = styled.div`
  position: relative;
  z-index: 5;
  text-align: center;
  background-image: url('/Images/bglogo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding: 2rem;
  margin-top: 3.5rem;

  @media (max-width: 768px) {
    margin-top: 3.5rem;
    padding: 1.5rem 1rem;
    width: 90%;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    width: 95%;
  }

  @media (max-width: 320px) {
    padding: 0.75rem 0.5rem;
  }
`;

const ContentTitle = styled.h3`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: ${theme.colors.textColor};
  margin: 0 0 2.688rem 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 0 0 2rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }

  @media (max-width: 320px) {
    font-size: 1.125rem;
  }
`;

const ContentDescription = styled.p`
  font-family: 'Pangram-Regular', sans-serif;
  font-size: 1rem;
  color: #525252;
  margin: 0 0 8rem 0;
  line-height: 1.6;
  padding: 1.5rem 0;
  position: relative;
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;
  word-break: break-word;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, #A3DEAC00 0%, #A3DEAC 30%, #A3DEAC 70%, #A3DEAC00 100%);
  }

  &::before { top: 0; }
  &::after  { bottom: 0; }

  @media (max-width: 768px) {
    font-size: 0.875rem;
    margin: 0 0 1.5rem 0;
    padding: 1rem 0;
  }

  @media (max-width: 320px) {
    font-size: 0.8125rem;
    margin: 0 0 1rem 0;
    padding: 0.75rem 0;
  }
`;

const DesktopButtonWrapper = styled.div`
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileButtonWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    padding: 0 1.125rem;
    margin-top: 1.5rem;
  }
`;

const ProgressText = styled.p`
  font-family: 'Pangram-Medium', sans-serif;
  font-size: 1rem;
  color: #525252;
  margin: 1rem 0 0 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileProgressText = styled.p`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-family: 'Pangram-Medium', sans-serif;
    font-size: 0.875rem;
    color: #525252;
    margin: 0.75rem 0 0 0;
    text-align: center;
  }
`;

interface CourseItem {
  id: number;
  title: string;
  description: string;
}

export const WhyCourse = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [targetIndex, setTargetIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const courseItems: CourseItem[] = [
    {
      id: 1,
      title: 'Live Sessions',
      description: 'Learn directly from experienced UI/UX professionals through interactive, instructor-led classes with real-time guidance and feedback.'
    },
    {
      id: 2,
      title: 'Real Projects',
      description: 'Work on industry-inspired projects that help you apply your skills and build a portfolio employers value.'
    },
    {
      id: 3,
      title: 'AI-Powered Tools',
      description: 'Learn to use the latest AI tools to streamline your design process, boost productivity, and create better user experiences.'
    },
    {
      id: 4,
      title: 'Career Support',
      description: 'Receive expert guidance on resumes, portfolios, interviews, and job applications to confidently start your UI/UX career.'
    },
    {
      id: 5,
      title: 'Community Access',
      description: 'Be part of a supportive community to ask questions, share ideas, receive feedback, and stay motivated throughout your journey.'
    }
  ];

  const getCircleAngle = (index: number) => {
    const totalNumbers = courseItems.length;
    const baseAngle = (index * 180) / (totalNumbers - 1);
    const activeAngle = (activeIndex * 180) / (totalNumbers - 1);
    const targetAngle = 1;
    const rotationOffset = activeAngle - targetAngle;
    return baseAngle - rotationOffset;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerHeight = containerRef.current.offsetHeight;
      
      const scrolled = Math.max(0, -rect.top);
      const maxScroll = containerHeight - windowHeight;
      const progress = Math.min(scrolled / maxScroll, 1);
      
      const sectionSize = 1 / courseItems.length;
      const currentSection = Math.floor(progress / sectionSize);
      const newTargetIndex = Math.min(currentSection, courseItems.length - 1);
      
      if (newTargetIndex !== targetIndex) {
        setTargetIndex(newTargetIndex);
      }
      
      setScrollProgress(progress * (courseItems.length - 1));
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    throttledScroll();
    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [courseItems.length, targetIndex]);

  useEffect(() => {
    if (targetIndex !== activeIndex) {
      const timer = setTimeout(() => {
        if (targetIndex > activeIndex) {
          setActiveIndex(prev => prev + 1);
        } else if (targetIndex < activeIndex) {
          setActiveIndex(prev => prev - 1);
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [targetIndex, activeIndex]);

  return (
    <WhyCourseContainer ref={containerRef}>
      <StickyWrapper>
        <Title>
          Why This <span className="highlight">Course?</span>
        </Title>

        <CarouselContainer>
          <EllipsePath />
          <FadingLine />
          
          {/* Numbers on ellipse */}
          {courseItems.map((item, index) => {
            const angle = getCircleAngle(index);
            return (
              <NumberCircle
                key={item.id}
                $isActive={index === activeIndex}
                $angle={angle}
              >
                {item.id.toString().padStart(2, '0')}
              </NumberCircle>
            );
          })}

          <ContentCard>
            <ContentTitle>{courseItems[activeIndex].title}</ContentTitle>
            <ContentDescription>{courseItems[activeIndex].description}</ContentDescription>

            <DesktopButtonWrapper>
              <Button 
                text="Book My Free Career Call"
                bgColor={theme.colors.primary}
                textColor={theme.colors.textColor}
                width="100%"
                iconSrc="/Logo/whatsappLogo.svg"
                iconAlt="WhatsApp"
                onClick={() => window.open('https://wa.me/919834877006', '_blank', 'noopener,noreferrer')}
              />
            </DesktopButtonWrapper>

            <ProgressText>
              {(activeIndex + 1).toString().padStart(2, '0')}/{courseItems.length.toString().padStart(2, '0')}
            </ProgressText>
          </ContentCard>
        </CarouselContainer>

        <MobileButtonWrapper>
          <Button 
            text="Book My Free Career Call"
            bgColor={theme.colors.primary}
            textColor={theme.colors.textColor}
            width="100%"
            iconSrc="/Logo/whatsappLogo.svg"
            iconAlt="WhatsApp"
            onClick={() => window.open('https://wa.me/919834877006', '_blank', 'noopener,noreferrer')}
          />
          <MobileProgressText>
            {(activeIndex + 1).toString().padStart(2, '0')}/{courseItems.length.toString().padStart(2, '0')}
          </MobileProgressText>
        </MobileButtonWrapper>
      </StickyWrapper>
    </WhyCourseContainer>
  )
}

export default WhyCourse
