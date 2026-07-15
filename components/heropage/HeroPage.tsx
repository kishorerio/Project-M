'use client';

import theme from '@/theme/theme';
import React from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';

const HeroContainer = styled.div `
  height: 110vh;
  background-image: url('/Images/Bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -80px 2.5rem 0 2.5rem;
  padding-top: 80px;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 110vh;
    margin: -40px 1.125rem 0 1.125rem;
  }
`;

const FloatingIcon = styled.img < {
    $position: string
} > `
  position: absolute;
  ${
    props => props.$position
};
  animation: float 3s ease-in-out infinite;
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;

const BlueIcon = styled(FloatingIcon)`
  left: 4%;
  top: 43%;
  width: 11.078rem;
  height: 4rem;
  animation-delay: 0s;

  @media (max-width: 768px) {
    width: 136px;
    height: 50px;
    left: 4%;
    top: auto;
    bottom: 16%;
  }
  @media (max-width: 580px) {
    width: 130px;
    height: 50px;
    left: 4%;
    top: auto;
    bottom: 16%;
  }
  @media (max-width: 480px) {
    width: 130px;
    height: 50px;
    left: 4%;
    top: auto;
    bottom: 8%;
  }
  @media (max-width: 380px) {
    width: 130px;
    height: 50px;
    left: 4%;
    top: auto;
    bottom: 25%;
  }
`;

const KaaviIcon = styled(FloatingIcon)`
  left: 10%;
  bottom: 20%;
  width: 11.078rem;
  height: 4rem;
  animation-delay: 1s;

  @media (max-width: 768px) {
    width: 136px;
    height: 50px;
    left: auto;
    right: 2%;
    bottom: auto;
    top: 20%;
  }
`;

const GreenIcon = styled(FloatingIcon)`
  right: 6%;
  top: 45%;
  width: 11.078rem;
  height: 4rem;
  animation-delay: 0.5s;

  @media (max-width: 768px) {
    width: 136px;
    height: 50px;
    left: 0;
    top: 20%;
  }
`;

const TextWrap = styled.div `
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0 1.125rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Title = styled.h1 `
  font-size: 4.125rem;
  font-family: 'Rightgrotesk-widemedium', sans-serif;
  font-weight: 500;
  line-height: 120%;
  color: ${
    theme.colors.secondary
};
  margin-bottom: 3rem;
  text-align: center;
  letter-spacing: 0.6px;

  span {
    color: ${
    theme.colors.primary
};
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: 580px) {
    font-size: 2.1rem;
  }
`;

const SubTitle = styled.p `
  font-family: 'Pangram-Regular', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0%;
  text-align: center;
  color: ${
    theme.colors.secondaryTextColor
};
  margin-bottom: 3rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const ButtonWrapper = styled.div `
  @media (max-width: 360px) {
    margin-top: 2.6rem;
    width: 100%;
  }
`;

const WHATSAPP_URL = 'https://wa.me/919834877006';

const HeroPage = () => {
    return (
        <HeroContainer>
            <BlueIcon src="/Images/blue.svg" alt="Blue" $position=""/>
            <KaaviIcon src="/Images/kaavi.svg" alt="Kaavi" $position=""/>
            <GreenIcon src="/Images/green.svg" alt="Green" $position=""/>

            <TextWrap>

                <Title>From Beginner to Confident<br/>{' '}
                    <span>
                        UI/UX Designer
                    </span>
                    {' '}
                    in 8 Weeks</Title>
                <SubTitle>No fluff. Just practical skills, real-world projects, and AI-powered tools to prepare you for a successful career in UI/UX design.</SubTitle>
                <ButtonWrapper>
                    <Button text="Book My Free Career Call"
                        bgColor={
                            theme.colors.primary
                        }
                        textColor={
                            theme.colors.secondary
                        }
                        iconSrc="/Logo/whatsappLogo.svg"
                        iconAlt="WhatsApp"
                        onClick={
                            () => window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')
                        }
                        width='19.063rem'/>
                </ButtonWrapper>
            </TextWrap>
        </HeroContainer>
    );
};

export default HeroPage;
