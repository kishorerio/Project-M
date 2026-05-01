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
`;

const LeftSection = styled.div`
`;

const Title = styled.h2`
  font-family: 'Pangram-Medium', sans-serif;
  font-weight: 500;
  font-size: 3.375rem;
  line-height: 120%;
  color: ${theme.colors.secondary};
  margin: 0 0 2rem 0;

  span {
    color: ${theme.colors.primary};
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
`;

const Question = styled.h3`
  font-family: 'Pangram-Bold', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: ${theme.colors.secondary};
  margin: 0;
  flex: 1;
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

const PlusIcon = styled.div`
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
    transform: translateX(-50%) ${props => props.isOpen ? 'rotate(90deg)' : 'rotate(0deg)'};
  }
`;

const MinusIcon = styled.div`
  width: 24px;
  height: 2px;
  background-color: ${theme.colors.secondary};
`;

const AnswerContainer = styled.div<{ isOpen: boolean }>`
  max-height: ${props => props.isOpen ? '200px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

const Answer = styled.p`
  font-family: 'Pangram-Regular', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 150%;
  color: ${theme.colors.secondaryTextColor};
  margin: 0;
  padding: 0 1.563rem 1.563rem 1.563rem;
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
                  <PlusIcon isOpen={false} />
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
