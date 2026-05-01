'use client';

import styled from 'styled-components'
import theme from '../../theme/theme'
import Button from '../ui/Button'

const ProgramsContainer = styled.section`
  background-color: ${theme.colors.white};
  margin: 0 2.5rem;
  margin-bottom: 10rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 3rem;
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
`;

const ModuleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
`;

const ModuleNumber = styled.div<{ $isHighlighted?: boolean }>`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.125rem;
  color: ${props => props.$isHighlighted ? theme.colors.white : theme.colors.textColor};
  align-self: center;
`;

const ModuleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ModuleTitle = styled.h3<{ $isHighlighted?: boolean }>`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.25rem;
  color: ${props => props.$isHighlighted ? theme.colors.white : theme.colors.textColor};
  margin: 0 0 1rem 0;
  line-height: 140%;
  width: 90%;
`;

const ModuleDetails = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const DetailItem = styled.div<{ $isHighlighted?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Pangram-Medium', sans-serif;
  font-size: 0.875rem;
  color: ${props => props.$isHighlighted ? theme.colors.white : '#666'};
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

const ArrowIcon = styled.img<{ $isHighlighted?: boolean }>`
  width: 0.875rem;
  height: 0.875rem;
  filter: ${props => props.$isHighlighted ? 'brightness(0) invert(1)' : 'none'};
`;

const BottomButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
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
        <Button 
          text="Download Syllabus"
          bgColor={theme.colors.primary}
          textColor={theme.colors.secondary}
          width="267px"
          onClick={() => console.log('Download syllabus clicked')}
        />
      </Header>

      <ModuleList>
        {modulesData.map((module) => (
          <ModuleCard key={module.id} $isHighlighted={module.isHighlighted}>
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
            
            <ArrowIcon 
              src="/Logo/arrow.svg" 
              alt="Arrow" 
              $isHighlighted={module.isHighlighted}
            />
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
