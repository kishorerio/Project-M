'use client';

import styled from 'styled-components'
import theme from '../../theme/theme'
import Button from '../ui/Button'

const CourseContainer = styled.section `
  padding: 0 2.5rem;
  background-color: ${
    theme.colors.white
};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  margin-bottom: 12.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 6rem;
  }

  @media (max-width: 768px) {
    padding: 0 1.125rem;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }
`;

const LeftSection = styled.div `
  display: flex;
  flex-direction: column;
`;

const CourseTitle = styled.h2 `
  font-family: 'Rightgrotesk-widemedium', sans-serif;
  letter-spacing: 0.5px;
  font-size: 3.375rem;
  font-weight: 500;
  color: ${
    theme.colors.textColor
};
  margin: 0;
  line-height: 1.2;
  
  .highlight {
    color: ${
    theme.colors.primary
};
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CourseImage = styled.img `
  width: 22.9375rem;
  height: 20.9375rem;
  object-fit: contain;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    max-width: 22.9375rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    max-width: 100%;
  }
`;

const BottomSection = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

const TrialText = styled.p `
  font-family: 'Pangram-Regular', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #9E9E9E;
  margin: 0;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const TrialOffer = styled.h3 `
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.75rem;
  color: ${
    theme.colors.textColor
};
  margin: 0;
  line-height: 1.2;

   @media (max-width: 1024px) {
    display: none;
  }
    
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const RightSection = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  height: 100%;
`;

const CourseList = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CourseCard = styled.div `
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2.188rem 1.625rem;
  background-color: ${
    theme.colors.white
};
  border: 1.5px solid #CCC3E2;
  border-radius: 1.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 1rem;
    align-items: flex-start;
  }
`;

const CourseNumber = styled.div `
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: radial-gradient(70.69% 70.69% at 50% 50%, #7447CF 30%, #4A1CBB 100%);
  color: ${
    theme.colors.white
};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.125rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 0.875rem;
  }
`;

const CourseInfo = styled.div `
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
`;

const CourseCategory = styled.div `
  display: flex;
  flex-direction: column;
`;

const CategoryTitle = styled.h4 `
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${
    theme.colors.textColor
};
  margin: 0;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CourseAccess = styled.p `
  font-family: 'Pangram-Regular', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${
    theme.colors.secondaryTextColor
};
  margin: 0;
  line-height: 1.5;
  text-align: left;
  white-space: normal;
  word-break: break-word;
  max-width: 17rem;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const ButtonWrapper = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Course = () => {
    const courseData = [
        {
            id: 1,
            title: [
                'Non - IT Professionals', '& Fresh graduates'
            ],
            access: 'Start your UI/UX journey from scratch with a structured, beginner-friendly learning path.'
        }, {
            id: 2,
            title: [
                'Students &', 'Career Gap Students'
            ],
            access: 'Build practical skills, real projects, and a strong portfolio to confidently launch or restart your career.'
        }, {
            id: 3,
            title: [
                'Graphic Designers &', 'Software Developers'
            ],
            access: 'Learn to use the latest AI tools to streamline your design process, boost productivity, and create better user experiences.'
        }
    ];

    return (
        <CourseContainer>
            <LeftSection>
                <CourseTitle>
                    The Course is ideal<br/>
                    for you
                    <span className="highlight"> if you are</span>
                </CourseTitle>

                <CourseImage src="/Images/theCourse.png" alt="The Course"/>

                <BottomSection>
                    <TrialText>Wondering if the course is right for you?</TrialText>
                    <TrialOffer>We offer a trail lesson for free!</TrialOffer>
                </BottomSection>
            </LeftSection>

            <RightSection>
                <CourseList> {
                    courseData.map((course) => (
                        <CourseCard key={
                            course.id
                        }>
                            <CourseNumber>{
                                course.id.toString().padStart(2, '0')
                            }</CourseNumber>
                            <CourseInfo>
                                <CourseCategory> {
                                    course.title.map((line, index) => (
                                        <CategoryTitle key={index}>
                                            {line}</CategoryTitle>
                                    ))
                                } </CourseCategory>
                                <CourseAccess> {
                                    course.access.split('\n').map((line, index) => (
                                        <span key={index}>
                                            {line}
                                            {
                                            index === 0 && <br/>
                                        } </span>
                                    ))
                                } </CourseAccess>
                            </CourseInfo>
                        </CourseCard>
                    ))
                } </CourseList>

                <ButtonWrapper>
                    <Button text="I want a Free Lesson"
                        bgColor={
                            theme.colors.primary
                        }
                        textColor={
                            theme.colors.secondary
                        }
                        width="100%"
                        onClick={
                            () => window.open('https://wa.me/919342242792', '_blank', 'noopener,noreferrer')
                        }/>
                </ButtonWrapper>
            </RightSection>
        </CourseContainer>
    )
}

export default Course
