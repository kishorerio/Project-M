'use client';

import styled from 'styled-components'
import theme from '../../theme/theme'
import Button from '../ui/Button'

const ProgramsContainer = styled.section`
  background-color: ${theme.colors.white};
  margin: 0 2.5rem;
  margin-bottom: 10rem;

  @media (max-width: 768px) {
    margin: 0 1.125rem 5rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const Title = styled.h2`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 3rem;
  font-weight: 400;
  color: ${theme.colors.textColor};
  margin: 0;
  line-height: 1.2;
  
  .highlight {
    color: ${theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 580px) {
    font-size: 1.5rem;
  }
`;

const TopButtonWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const ModuleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const ModuleCard = styled.div<{ $isHighlighted?: boolean }>`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 2rem;
  padding: 1.6rem 1.7rem;
  background: ${props => props.$isHighlighted ? theme.colors.primary : theme.colors.white};
  border: 1.5px solid ${props => props.$isHighlighted ? theme.colors.primary : '#CCC3E2'};
  border-radius: 1.25rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: linear-gradient(80.86deg, #93E46E -10%, #FFFFFF 100%);
    border-color: ${theme.colors.primary};
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
    gap: 0.75rem;
    flex-direction: column;
  }
`;

const ModuleTopRow = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

const ModuleNumber = styled.div<{ $isHighlighted?: boolean }>`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.125rem;
  color: ${props => props.$isHighlighted ? theme.colors.white : theme.colors.textColor};
  align-self: center;

  @media (max-width: 768px) {
    font-size: 0.875rem;
    align-self: auto;
    display: none;
  }
`;

const MobileModuleNumber = styled.div<{ $isHighlighted?: boolean }>`
  display: none;
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 0.875rem;
  color: ${props => props.$isHighlighted ? theme.colors.white : theme.colors.textColor};

  @media (max-width: 768px) {
    display: block;
  }
`;

const ModuleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;

  @media (max-width: 768px) {
    display: none;
    width: 100%;
  }
`;

const MobileModuleContent = styled.div`
  display: none;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const ModuleTitle = styled.h3<{ $isHighlighted?: boolean }>`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.25rem;
  color: ${props => props.$isHighlighted ? theme.colors.white : theme.colors.textColor};
  margin: 0 0 1rem 0;
  line-height: 140%;
  width: 90%;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 0 0 0.5rem 0;
    width: 100%;
  }
`;

const ModuleDetails = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const DetailItem = styled.div<{ $isHighlighted?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Pangram-Medium', sans-serif;
  font-size: 0.875rem;
  color: ${props => props.$isHighlighted ? theme.colors.white : '#666'};

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;

  @media (max-width: 768px) {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const ArrowIcon = styled.img<{ $isHighlighted?: boolean }>`
  width: 0.875rem;
  height: 0.875rem;
  filter: ${props => props.$isHighlighted ? 'brightness(0) invert(1)' : 'none'};

  @media (max-width: 768px) {
    width: 0.75rem;
    height: 0.75rem;
    align-self: auto;
  }
`;

const DesktopArrow = styled(ArrowIcon)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const BottomButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;

interface ModuleData {
  id: number;
  number: string;
  title: string;
  liveClasses: number;
  activities: number;
  isHighlighted?: boolean;
}

export const Programs = () => {
  const modulesData: ModuleData[] = [
    {
      id: 1,
      number: 'Module 1',
      title: 'UX Foundations & the AI-Augmented Designer\'s Mindset',
      liveClasses: 5,
      activities: 0,
      isHighlighted: false
    },
    {
      id: 2,
      number: 'Module 2',
      title: 'User Research in the Age of AI: Methods & Synthesis',
      liveClasses: 5,
      activities: 0,
      isHighlighted: false
    },
    {
      id: 3,
      number: 'Module 3',
      title: 'Information Architecture & AI-Assisted Content Strategy',
      liveClasses: 5,
      activities: 0,
      isHighlighted: false
    },
    {
      id: 4,
      number: 'Module 4',
      title: 'Interaction Design, Micro-Interactions & Motion Principles',
      liveClasses: 5,
      activities: 0,
      isHighlighted: false
    },
    {
      id: 5,
      number: 'Module 5',
      title: 'Rapid Prototyping with Generative & AI-Powered Tools',
      liveClasses: 5,
      activities: 0,
      isHighlighted: false
    }
  ];

  return (
    <ProgramsContainer>
      <Header>
        <Title>
          <span className="highlight">Program</span> of the course<br />
          is 8 Module
        </Title>
        <TopButtonWrapper>
          <Button 
            text="Download Syllabus"
            bgColor={theme.colors.primary}
            textColor={theme.colors.secondary}
            width="267px"
            onClick={() => console.log('Download syllabus clicked')}
          />
        </TopButtonWrapper>
      </Header>

      <ModuleList>
        {modulesData.map((module) => (
          <ModuleCard key={module.id} $isHighlighted={module.isHighlighted}>

            {/* Desktop layout */}
            <ModuleNumber $isHighlighted={module.isHighlighted}>
              {module.number}
            </ModuleNumber>
            
            <ModuleContent>
              <ModuleTitle $isHighlighted={module.isHighlighted}>
                {module.title}
              </ModuleTitle>
              <ModuleDetails>
                <DetailItem $isHighlighted={module.isHighlighted}>
                  <Icon src="/Logo/videoIcon.svg" alt="Video" />
                  {module.liveClasses} Live Classes
                </DetailItem>
                <DetailItem $isHighlighted={module.isHighlighted}>
                  <Icon src="/Logo/bookIcon.svg" alt="Activities" />
                  Activities
                </DetailItem>
              </ModuleDetails>
            </ModuleContent>
            
            <DesktopArrow 
              src="/Logo/arrow.svg" 
              alt="Arrow" 
              $isHighlighted={module.isHighlighted}
            />

            {/* Mobile: top row with number + arrow */}
            <ModuleTopRow>
              <MobileModuleNumber $isHighlighted={module.isHighlighted}>
                {module.number}
              </MobileModuleNumber>
              <ArrowIcon 
                src="/Logo/arrow.svg" 
                alt="Arrow" 
                $isHighlighted={module.isHighlighted}
              />
            </ModuleTopRow>

            {/* Mobile: content below top row */}
            <MobileModuleContent>
              <ModuleTitle $isHighlighted={module.isHighlighted}>
                {module.title}
              </ModuleTitle>
              <ModuleDetails>
                <DetailItem $isHighlighted={module.isHighlighted}>
                  <Icon src="/Logo/videoIcon.svg" alt="Video" />
                  {module.liveClasses} Live Classes
                </DetailItem>
                <DetailItem $isHighlighted={module.isHighlighted}>
                  <Icon src="/Logo/bookIcon.svg" alt="Activities" />
                  Activities
                </DetailItem>
              </ModuleDetails>
            </MobileModuleContent>

          </ModuleCard>
        ))}
      </ModuleList>

      <BottomButtonWrapper>
        <Button 
          text="Download Syllabus"
          bgColor={theme.colors.primary}
          textColor={theme.colors.secondary}
          width="562px"
          onClick={() => console.log('Download syllabus clicked')}
        />
      </BottomButtonWrapper>
    </ProgramsContainer>
  )
}

export default Programs
