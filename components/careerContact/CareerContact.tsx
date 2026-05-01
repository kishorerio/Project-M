'use client';

import React, { useState } from 'react'
import styled from 'styled-components'
import theme from '../../theme/theme'
import Button from '../ui/Button'

const CareerContainer = styled.div`
  background-color: ${theme.colors.primary};
  border-radius: 1.25rem;
  padding: 3rem;
  margin: 0 2.5rem;
  display: flex;
  align-items: stretch;
  gap: 4rem;
  position: relative;
  overflow: hidden;
  min-height: 500px;
  margin-bottom: 5rem;
`;

const LeftSection = styled.div`
  flex: 1;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-image: url('/Images/bglogolight.svg');
  background-size: 65%;
  background-repeat: no-repeat;
  background-position: center;
  padding: 2rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ButtonWrapper = styled.div`
  margin-top: auto;
  padding-top: 2rem;
`;

const Title = styled.h2`
  font-family: 'Pangram-Bold', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  line-height: 120%;
  color: ${theme.colors.secondary};
  margin: 0 0 2.5rem 0;
`;

const Description = styled.p`
  font-family: 'Pangram-Regular', sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 150%;
  color: ${theme.colors.secondaryTextColor};
  margin: 0 0 2rem 0;
  opacity: 0.8;
`;

const RightSection = styled.div`
  flex: 1;
  z-index: 1;
  position: relative;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:focus-within label {
    color: ${theme.colors.secondary};
  }
`;

const Label = styled.label`
  font-family: 'Pangram-Medium', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  color: ${theme.colors.white};
  transition: color 0.2s ease;
`;

const Input = styled.input`
  padding: 1rem 1.25rem;
  border: none;
  border-radius: 0.75rem;
  background-color: ${theme.colors.white};
  font-family: 'Pangram', sans-serif;
  font-size: 1rem;
  color: ${theme.colors.textColor};
  outline: none;
  transition: border 0.2s ease;

  &::placeholder {
    color: #A0A0A0;
  }

  &:focus {
    border: 2px solid ${theme.colors.secondary};
  }
`;

export const CareerContact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    currentStatus: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <CareerContainer>
      <LeftSection>
        <ContentWrapper>
          <Title>
            Book Your Free Career<br />
            Guidance Call
          </Title>
          <Description>
            Let's plan your journey to become a professional<br />
            UI/UX designer in 2026.
          </Description>
        </ContentWrapper>
        
        <ButtonWrapper>
          <Button
            text="Contact Us"
            bgColor={theme.colors.white}
            textColor={theme.colors.secondary}
            iconSrc="/Logo/whatsapp-color.svg"
            iconAlt="WhatsApp"
            width="27rem"
            onClick={() => console.log('Contact Us clicked')}
          />
        </ButtonWrapper>
      </LeftSection>

      <RightSection>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Full Name</Label>
            <Input
              type="text"
              name="fullName"
              placeholder="Enter your name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Phone Number</Label>
            <Input
              type="tel"
              name="phoneNumber"
              placeholder="Enter Mobile Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Email Address</Label>
            <Input
              type="email"
              name="emailAddress"
              placeholder="Enter email"
              value={formData.emailAddress}
              onChange={handleInputChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Current Status</Label>
            <Input
              type="text"
              name="currentStatus"
              placeholder="Enter email"
              value={formData.currentStatus}
              onChange={handleInputChange}
              required
            />
          </FormGroup>

          <Button
            text="Download Syllabus"
            bgColor={theme.colors.secondary}
            textColor={theme.colors.primary}
            width="100%"
            onClick={() => console.log('Download Syllabus clicked')}
          />
        </Form>
      </RightSection>
    </CareerContainer>
  )
}