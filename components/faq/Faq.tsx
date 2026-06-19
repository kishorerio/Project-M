'use client';

import React, { useState } from 'react'
import styled from 'styled-components'
import theme from '../../theme/theme'
import Button from '../ui/Button'
import faqData from '../../data/faq.json'

const FaqContainer = styled.div`
  display: flex;
  gap: 5rem;
  margin: 0 2.5rem;
  margin-bottom: 6.25rem;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 2rem;
    margin: 0 2rem 4rem;
  }

  @media (max-width: 768px) {
    margin: 0 1.125rem 3rem;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    margin: 0 1rem 2.5rem;
  }

  @media (max-width: 320px) {
    margin: 0 0.75rem 2rem;
    gap: 1rem;
  }
`;

const LeftSection = styled.div`
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const Title = styled.h2`
  font-family: 'Rightgrotesk-widemedium', sans-serif;
  letter-spacing: 0.5px;
  font-weight: 500;
  font-size: 3.375rem;
  line-height: 120%;
  color: ${theme.colors.secondary};
  margin: 0 0 2rem 0;

  span {
    color: ${theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 0 0 1rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }

  @media (max-width: 320px) {
    font-size: 1.5rem;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 320px) {
    gap: 0.75rem;
  }
`;

const FaqItem = styled.div<{ isOpen: boolean }>`
  border: 1.5px solid ${props => props.isOpen ? theme.colors.primary : '#CCC3E2'};
  border-radius: 1.25rem;
  background: ${props => props.isOpen 
    ? 'radial-gradient(circle at center, #93E46E -100%, #FFFFFF 100%)'
    : '#ffffff'
  };
  transition: all 0.3s ease;
  overflow: hidden;
`;

const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.563rem;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }

  @media (max-width: 320px) {
    padding: 1rem;
  }
`;

const Question = styled.h3`
  font-family: 'Pangram-Bold', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: ${theme.colors.secondary};
  margin: 0;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 320px) {
    font-size: 0.875rem;
  }
`;

const Answer = styled.p`
  font-family: 'Pangram-Regular', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 150%;
  color: ${theme.colors.secondaryTextColor};
  margin: 0;
  padding: 0 1.563rem 1.563rem 1.563rem;

  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 0 1.25rem 1.25rem;
  }

  @media (max-width: 320px) {
    font-size: 0.8125rem;
    padding: 0 1rem 1rem;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
`;

const PlusIcon = styled.div<{ $isOpen?: boolean }>`
  width: 24px;
  height: 24px;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: ${theme.colors.secondary};
    transition: transform 0.3s ease;
  }
  
  &::before {
    width: 24px;
    height: 2px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  
  &::after {
    width: 2px;
    height: 24px;
    top: 0;
    left: 50%;
    transform: translateX(-50%) ${props => props.$isOpen ? 'rotate(90deg)' : 'rotate(0deg)'};
  }

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;

    &::before {
      width: 16px;
    }

    &::after {
      height: 16px;
    }
  }
`;

const MinusIcon = styled.div`
  width: 24px;
  height: 2px;
  background-color: ${theme.colors.secondary};

  @media (max-width: 768px) {
    width: 16px;
  }
`;

const AnswerContainer = styled.div<{ isOpen: boolean }>`
  max-height: ${props => props.isOpen ? '200px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;


export const Faq = () => {
  const [openItem, setOpenItem] = useState<number | null>(1); // First item open by default

  const toggleItem = (id: number) => {
    setOpenItem(prev => prev === id ? null : id);
  };

  return (
    <FaqContainer>
      <LeftSection>
        <Title>
          Frequently Asked<br />
          Questions <span>(FAQs)</span>
        </Title>
        <Button
          text="Chat in WhatsApp"
          bgColor={theme.colors.primary}
          textColor={theme.colors.secondary}
          iconSrc="/Logo/whatsappLogo.svg"
          iconAlt="WhatsApp"
          onClick={() => console.log('WhatsApp clicked')}
          width='252px'
        />
      </LeftSection>
      
      <RightSection>
        {faqData.map((faq) => (
          <FaqItem key={faq.id} isOpen={openItem === faq.id}>
            <QuestionHeader onClick={() => toggleItem(faq.id)}>
              <Question>{faq.question}</Question>
              <IconButton>
                {openItem === faq.id ? (
                  <MinusIcon />
                ) : (
                  <PlusIcon $isOpen={false} />
                )}
              </IconButton>
            </QuestionHeader>
            <AnswerContainer isOpen={openItem === faq.id}>
              <Answer>{faq.answer}</Answer>
            </AnswerContainer>
          </FaqItem>
        ))}
      </RightSection>
    </FaqContainer>
  )
}
