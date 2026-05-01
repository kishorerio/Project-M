import theme from '@/theme/theme';
import React from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';

const HeroContainer = styled.div `
  height: 140vh;
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
`;

const FloatingIcon = styled.img<{ $position: string }>`
  position: absolute;
  ${props => props.$position};
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
`;

const KaaviIcon = styled(FloatingIcon)`
  left: 10%;
  bottom: 10%;
  width: 11.078rem;
  height: 4rem;
  animation-delay: 1s;
`;

const GreenIcon = styled(FloatingIcon)`
  right: 6%;
  top: 45%;
  width: 11.078rem;
  height: 4rem;
  animation-delay: 0.5s;
`;

const TextWrap = styled.h1 `
  display: flex;
  align-items: center;
  flex-direction: column;
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

  span {
    color: ${
    theme.colors.primary
};
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

`;

const HeroPage = () => {
    return (
        <HeroContainer>
            <BlueIcon src="/Images/blue.svg" alt="Blue" $position="" />
            <KaaviIcon src="/Images/kaavi.svg" alt="Kaavi" $position="" />
            <GreenIcon src="/Images/green.svg" alt="Green" $position="" />
            
            <TextWrap>

                <Title>From Beginner to Confident<br/>{' '}
                    <span>
                        UI/UX Designer
                    </span>
                    {' '}
                    in 8 Weeks</Title>
                <SubTitle>No fluff. Just practical skills, real projects, and AI-powered tools to help you break into the design industry.</SubTitle>
                <Button text="Book My Free Career Call"
                    bgColor={
                        theme.colors.primary
                    }
                    textColor={
                        theme.colors.secondary
                    }
                    iconSrc="/Logo/whatsappLogo.svg"
                    iconAlt="WhatsApp"
                    
                    width='19.063rem'/>
            </TextWrap>
        </HeroContainer>
    );
};

export default HeroPage;
