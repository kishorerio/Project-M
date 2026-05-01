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
`;

const Title = styled.h2`
  font-family: 'RightGrotesk-widemedium', sans-serif;
  font-size: 3.375rem;
  color: ${theme.colors.textColor};
  margin: 0 0 1rem 0;
  line-height: 1.2;
  text-align: center;
  
  .highlight {
    color: ${theme.colors.primary};
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
  
  ${props => props.$angle === 180 ? `
    border: 2px solid red !important;
  ` : ''}
`;

const ContentCard = styled.div`
  position: relative;
  z-index: 5;
  // max-width: 500px;
  text-align: center;
  background-image: url('/Images/bglogo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding: 2rem;
  margin-top: 3.5rem;
`;

const ContentTitle = styled.h3`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: ${theme.colors.textColor};
  margin: 0 0 2.688rem 0;
`;

const ContentDescription = styled.p`
  font-family: 'Pangram-Regular', sans-serif;
  font-size: 1rem;
  color: #525252;
  margin: 0 0 3.5rem 0;
  line-height: 1.6;
`;

const ProgressText = styled.p`
  font-family: 'Pangram-Medium', sans-serif;
  font-size: 1rem;
  color: #525252;
  margin: 5.875rem 0 0 0;
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
      description: 'Get Life time Access to Recordings + 2 Weekly Live Session'
    },
    {
      id: 2,
      title: 'Real Projects',
      description: 'Work on industry-standard projects to build your portfolio'
    },
    {
      id: 3,
      title: 'AI-Powered Tools',
      description: 'Learn to use cutting-edge AI tools for modern design workflows'
    },
    {
      id: 4,
      title: 'Career Support',
      description: 'Get personalized mentorship and career guidance throughout'
    },
    {
      id: 5,
      title: 'Community Access',
      description: 'Join a vibrant community of designers and industry experts'
    }
  ];

  // Calculate angle for each circle based on scroll
  const getCircleAngle = (index: number) => {
    const totalNumbers = courseItems.length;
    const baseAngle = (index * 180) / (totalNumbers - 1); // Initial positions across 180 degrees
    const activeAngle = (activeIndex * 180) / (totalNumbers - 1); // Current active position
    const targetAngle = 1; // Top center position
    const rotationOffset = activeAngle - targetAngle; // How much to rotate to bring active to center
    
    return baseAngle - rotationOffset; // Rotate all numbers so active is at top center
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerHeight = containerRef.current.offsetHeight;
      
      // Calculate scroll progress based on how much of the container has been scrolled
      const scrolled = Math.max(0, -rect.top);
      const maxScroll = containerHeight - windowHeight;
      const progress = Math.min(scrolled / maxScroll, 1);
      
      // Divide scroll into equal sections for each step
      const sectionSize = 1 / courseItems.length;
      const currentSection = Math.floor(progress / sectionSize);
      const newTargetIndex = Math.min(currentSection, courseItems.length - 1);
      
      // Only update targetIndex if it's different
      if (newTargetIndex !== targetIndex) {
        setTargetIndex(newTargetIndex);
      }
      
      // Update scroll progress for smooth transitions
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

    throttledScroll(); // Initial call
    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [courseItems.length, targetIndex]);

  // Animate activeIndex to targetIndex step by step
  useEffect(() => {
    if (targetIndex !== activeIndex) {
      const timer = setTimeout(() => {
        if (targetIndex > activeIndex) {
          setActiveIndex(prev => prev + 1); // Always increment by 1
        } else if (targetIndex < activeIndex) {
          setActiveIndex(prev => prev - 1); // Always decrement by 1
        }
      }, 500); // Increased delay for better visibility and control

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
            
            <Button 
              text="Book My Free Career Call"
              bgColor={theme.colors.primary}
              textColor={theme.colors.textColor}
              width="100%"
              iconSrc="/Logo/whatsappLogo.svg"
              iconAlt="WhatsApp"
              onClick={() => console.log('Book call clicked')}
            />
            
            <ProgressText>
              {(activeIndex + 1).toString().padStart(2, '0')}/{courseItems.length.toString().padStart(2, '0')}
            </ProgressText>
          </ContentCard>
        </CarouselContainer>
      </StickyWrapper>
    </WhyCourseContainer>
  )
}

export default WhyCourse
