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

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    min-height: auto;
    margin: 0 2rem 4rem;
  }

  @media (max-width: 768px) {
    margin: 0 1.125rem 3rem;
    padding: 1.5rem;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
    margin: 0 1rem 2.5rem;
  }

  @media (max-width: 320px) {
    padding: 1rem;
    margin: 0 0.75rem 2rem;
    border-radius: 1rem;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-image: url('/Images/bglogolight.svg');
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  padding: 2rem;

  @media (max-width: 960px) {
    padding: 1rem;
    background-size: 40%;
  }

  @media (max-width: 580px) {
    background-size: 60%;
    padding: 0.5rem;
  }

  @media (max-width: 320px) {
    background-size: 70%;
    padding: 0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ButtonWrapper = styled.div`
  margin-top: auto;
  padding-top: 2rem;

  @media (max-width: 960px) {
    padding-top: 1.5rem;
  }

  @media (max-width: 580px) {
    padding-top: 1rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    button {
      width: 100% !important;
      max-width: 100% !important;
    }
  }
`;

const FormButtonWrapper = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    button {
      width: 100% !important;
      max-width: 100% !important;
    }
  }
`;

const Title = styled.h2`
  font-family: 'Pangram-Bold', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  line-height: 120%;
  color: ${theme.colors.secondary};
  margin: 0 0 2.5rem 0;

  @media (max-width: 960px) {
    font-size: 2rem;
    margin: 0 0 1.5rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }

  @media (max-width: 320px) {
    font-size: 1.5rem;
    margin: 0 0 1rem 0;
  }
`;

const Description = styled.p`
  font-family: 'Pangram-Regular', sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 150%;
  color: ${theme.colors.secondaryTextColor};
  margin: 0 0 2rem 0;
  opacity: 0.8;

  @media (max-width: 960px) {
    font-size: 1rem;
    margin: 0 0 1.5rem 0;
  }

  @media (max-width: 320px) {
    font-size: 0.875rem;
    margin: 0 0 1rem 0;
  }
`;

const RightSection = styled.div`
  flex: 1;
  z-index: 1;
  position: relative;

  @media (max-width: 960px) {
    width: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 580px) {
    gap: 1rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

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

  @media (max-width: 580px) {
    font-size: 0.875rem;
  }
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
  width: 100%;
  box-sizing: border-box;

  &::placeholder {
    color: #A0A0A0;
  }

  &:focus {
    border: 2px solid ${theme.colors.secondary};
  }

  @media (max-width: 580px) {
    padding: 0.875rem 1rem;
    font-size: 0.875rem;
  }

  @media (max-width: 320px) {
    padding: 0.75rem 0.875rem;
    font-size: 0.8125rem;
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
            Let&apos;s plan your journey to become a professional
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
            width="100%"
            onClick={() => window.open('https://wa.me/919342242792', '_blank', 'noopener,noreferrer')}
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
              placeholder="Enter your current status"
              value={formData.currentStatus}
              onChange={handleInputChange}
              required
            />
          </FormGroup>

          <Button
            text="Book Now"
            bgColor={theme.colors.secondary}
            textColor={theme.colors.primary}
            width="100%"
            onClick={() => window.open('https://wa.me/919342242792', '_blank', 'noopener,noreferrer')}
          />
        </Form>
      </RightSection>
    </CareerContainer>
  )
}
