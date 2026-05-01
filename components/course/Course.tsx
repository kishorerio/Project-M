'use client';

import styled from 'styled-components'
import theme from '../../theme/theme'
import Button from '../ui/Button'

const CourseContainer = styled.section`
  padding: 0 2.5rem;
  background-color: ${theme.colors.white};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  margin-bottom: 12.5rem;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  // gap: 1rem;
`;

const CourseTitle = styled.h2`
  font-family: 'RightGrotesk-Medium', sans-serif;
  font-size: 3.375rem;
  font-weight: 500;
  color: ${theme.colors.textColor};
  margin: 0;
  line-height: 1.2;
  
  .highlight {
    color: ${theme.colors.primary};
  }
`;

const CourseImage = styled.img`
  width: 22.9375rem;
  height: 20.9375rem;
  object-fit: contain;
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

const TrialText = styled.p`
  font-family: 'Pangram-Regular', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #9E9E9E;
  margin: 0;
`;

const TrialOffer = styled.h3`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.75rem;
  color: ${theme.colors.textColor};
  margin: 0;
  line-height: 1.2;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  height: 100%;
`;

const CourseList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CourseCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 2rem;
  background-color: ${theme.colors.white};
  border: 1.5px solid #CCC3E2;
  border-radius: 1.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;

const CourseNumber = styled.div`
  min-width: 48px;
  height: 48px;
  border-radius: 50%;
  background: radial-gradient(70.69% 70.69% at 50% 50%, #7447CF 30%, #4A1CBB 100%);
  color: ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.125rem;
  flex-shrink: 0;
`;

const CourseInfo = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const CourseCategory = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryTitle = styled.h4`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 140%;
  color: ${theme.colors.textColor};
  margin: 0;
  line-height: 1.4;
  `;
  
  const CourseAccess = styled.p`
  font-family: 'Pangram-Regular', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${theme.colors.secondaryTextColor};
  margin: 0;
  line-height: 1.5;
  line-height: 150%;
  text-align: left;
  white-space: nowrap;
`;

const ButtonWrapper = styled.div`
  width: 100%;
`;

export const Course = () => {
  const courseData = [
    {
      id: 1,
      title: ['Non - IT Professionals', '& Fresh graduates'],
      access: 'Get Life time Access to Recordings +\n2 Weekly Live Session'
    },
    {
      id: 2,
      title: ['Students &', 'Career Gap Students'],
      access: 'Get Life time Access to Recordings +\n2 Weekly Live Session'
    },
    {
      id: 3,
      title: ['Graphic Designers &', 'Software Developers'],
      access: 'Get Life time Access to Recordings +\n2 Weekly Live Session'
    }
  ];

  return (
    <CourseContainer>
      <LeftSection>
        <CourseTitle>
          The Course is ideal<br />
          for you <span className="highlight">if you are</span>
        </CourseTitle>
        
        <CourseImage src="/Images/theCourse.png" alt="The Course" />
        
        <BottomSection>
          <TrialText>Wondering if the course is right for you?</TrialText>
          <TrialOffer>We offer a trail lesson for free!</TrialOffer>
        </BottomSection>
      </LeftSection>
      
      <RightSection>
        <CourseList>
          {courseData.map((course) => (
            <CourseCard key={course.id}>
              <CourseNumber>{course.id.toString().padStart(2, '0')}</CourseNumber>
              <CourseInfo>
                <CourseCategory>
                  {course.title.map((line, index) => (
                    <CategoryTitle key={index}>{line}</CategoryTitle>
                  ))}
                </CourseCategory>
                <CourseAccess>
                  {course.access.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      {index === 0 && <br />}
                    </span>
                  ))}
                </CourseAccess>
              </CourseInfo>
            </CourseCard>
          ))}
        </CourseList>
        
        <ButtonWrapper>
          <Button 
            text="I want a Free Lesson"
            bgColor={theme.colors.primary}
            textColor={theme.colors.secondary}
            width="100%"
            onClick={() => console.log('Free lesson clicked')}
          />
        </ButtonWrapper>
      </RightSection>
    </CourseContainer>
  )
}

export default Course
