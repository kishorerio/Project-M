'use client';

import styled from 'styled-components'
import theme from '../../theme/theme'

const WhyAarasoftContainer = styled.section `
  background-color: ${
    theme.colors.white
};
  margin: 0 2.5rem;
  margin-bottom: 6.25rem;

  @media (max-width: 1024px) {
    margin: 0 2rem 4rem;
  }

  @media (max-width: 768px) {
    margin: 0 1.125rem 3rem;
  }
`;

const Title = styled.h2 `
  font-family: 'RightGrotesk-widemedium', sans-serif;
  font-size: 3.375rem;
  color: ${
    theme.colors.textColor
};
  margin: 0 0 46px 0;
  line-height: 1.2;
  text-align: center;
  
  .highlight {
    color: ${
    theme.colors.primary
};
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 0 0 1rem 0;
  }
`;

const Subtitle = styled.p `
  font-family: 'Pangram-Regular', sans-serif;
  font-size: 1rem;
  color: #525252;
  margin: 0 auto;
  text-align: center;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const CardsGrid = styled.div `
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 1.5rem;
  align-items: end;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const CenterColumn = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-column: 1 / -1;
    order: -1;
  }

  @media (max-width: 768px) {
    order: 1;
    gap: 1rem;
    width: 100%;
  }
`;

const TitleSection = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 1rem;
`;

const CenterCardsRow = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const Card = styled.div < {
    $bgImage?: string;
    $bgColor?: string;
    $height?: string;
    $mobileOrder?: number;
} > `
  padding: 2rem;
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: ${
    props => props.$height || '300px'
};
  position: relative;
  overflow: hidden;
  gap: 2rem;
  
  ${
    props => props.$bgImage ? `
    background-image: url(${
        props.$bgImage
    });
    background-size: cover;
    background-position: center;
  ` : `
    background-color: ${
        props.$bgColor || '#f5f5f5'
    };
  `
}

  @media (max-width: 768px) {
    min-height: ${
    props => props.$height === '472px' ? '300px' : '200px'
};
    padding: 1.5rem;
    order: ${
    props => props.$mobileOrder ?? 0
};
    width: 100%;
  }
`;

const CardNumber = styled.div < {
    $bgColor?: string;
    $textColor?: string;
} > `
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background-color: ${
    props => props.$bgColor || theme.colors.primary
};
  color: ${
    props => props.$textColor || theme.colors.textColor
};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    width: 68px;
    height: 68px;
    font-size: 1rem;
  }
`;

const CardTitle = styled.h3 < {
    $textColor?: string
} > `
  font-family: 'RightGrotesk-widemedium', sans-serif;
  font-size: 1.5rem;
  color: ${
    props => props.$textColor || theme.colors.textColor
};
  margin: 0;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ArrowIcon = styled.div `
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background-color: ${
    theme.colors.primary
};
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 13px;
    height: 13px;
    transform: rotate(180deg);
  }

  @media (max-width: 768px) {
    width: 52px;
    height: 52px;
  }
`;

const ContactCardContent = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

interface CardData {
    id: number;
    number?: string;
    title: string;
    bgImage?: string;
    bgColor?: string;
    height?: string;
    textColor?: string;
    numberBgColor?: string;
    numberTextColor?: string;
    isContactCard?: boolean;
}

export const WhyAarasoft = () => {
    const cardsData: CardData[] = [
        {
            id: 1,
            number: '01',
            title: 'Real-World Projects, Not Just Theory',
            bgImage: '/Images/RectangleOne.png',
            height: '472px',
            textColor: theme.colors.white,
            numberBgColor: theme.colors.primary,
            numberTextColor: theme.colors.textColor
        }, {
            id: 2,
            number: '02',
            title: 'AI-Powered Learning Approach',
            bgColor: '#f0f0f0',
            height: '290px',
            textColor: theme.colors.textColor,
            numberBgColor: theme.colors.primary,
            numberTextColor: theme.colors.textColor
        }, {
            id: 3,
            title: 'Contact Us',
            bgColor: '#f0f0f0',
            height: '290px',
            textColor: theme.colors.textColor,
            isContactCard: true
        }, {
            id: 4,
            number: '03',
            title: 'Career-Oriented Mentorship',
            bgImage: '/Images/RectangleTwo.png',
            height: '472px',
            textColor: theme.colors.secondary,
            numberBgColor: theme.colors.white,
            numberTextColor: theme.colors.textColor
        }
    ];

    return (
        <WhyAarasoftContainer>
            <CardsGrid> {/* Left Card - order 1 on mobile */}
                <Card key={
                        cardsData[0].id
                    }
                    $bgImage={
                        cardsData[0].bgImage
                    }
                    $bgColor={
                        cardsData[0].bgColor
                    }
                    $height={
                        cardsData[0].height
                    }
                    $mobileOrder={1}>
                    <CardNumber $bgColor={
                            cardsData[0].numberBgColor
                        }
                        $textColor={
                            cardsData[0].numberTextColor
                    }>
                        {
                        cardsData[0].number
                    } </CardNumber>
                    <CardTitle $textColor={
                        cardsData[0].textColor
                    }>
                        {
                        cardsData[0].title
                    } </CardTitle>
                </Card>

                {/* Center Column - order 2 on mobile (contains card 3 arrow + card 2) */}
                <CenterColumn>
                    <TitleSection>
                        <Title>
                            Why
                            <span className="highlight">
                                Aarasoft</span><br/>
                            Academy?
                        </Title>

                        <Subtitle>
                            No fluff. Just practical skills, real projects, and AI-powered tools to help you break into the design industry.
                        </Subtitle>
                    </TitleSection>

                    <CenterCardsRow>
                        <Card key={
                                cardsData[1].id
                            }
                            $bgImage={
                                cardsData[1].bgImage
                            }
                            $bgColor={
                                cardsData[1].bgColor
                            }
                            $height={
                                cardsData[1].height
                            }
                            $mobileOrder={3}>
                            <CardNumber $bgColor={
                                    cardsData[1].numberBgColor
                                }
                                $textColor={
                                    cardsData[1].numberTextColor
                            }>
                                {
                                cardsData[1].number
                            } </CardNumber>
                            <CardTitle $textColor={
                                cardsData[1].textColor
                            }>
                                {
                                cardsData[1].title
                            } </CardTitle>
                        </Card>

                        <Card key={
                                cardsData[2].id
                            }
                            $bgImage={
                                cardsData[2].bgImage
                            }
                            $bgColor={
                                cardsData[2].bgColor
                            }
                            $height={
                                cardsData[2].height
                            }
                            $mobileOrder={2}>
                            <ContactCardContent>
                                <ArrowIcon>
                                    <img src="/Logo/arrow.svg" alt="Arrow"/>
                                </ArrowIcon>
                                <CardTitle $textColor={
                                    cardsData[2].textColor
                                }>
                                    {
                                    cardsData[2].title
                                } </CardTitle>
                            </ContactCardContent>
                        </Card>
                    </CenterCardsRow>
                </CenterColumn>

                {/* Right Card - order 4 on mobile */}
                <Card key={
                        cardsData[3].id
                    }
                    $bgImage={
                        cardsData[3].bgImage
                    }
                    $bgColor={
                        cardsData[3].bgColor
                    }
                    $height={
                        cardsData[3].height
                    }
                    $mobileOrder={4}>
                    <CardNumber $bgColor={
                            cardsData[3].numberBgColor
                        }
                        $textColor={
                            cardsData[3].numberTextColor
                    }>
                        {
                        cardsData[3].number
                    } </CardNumber>
                    <CardTitle $textColor={
                        cardsData[3].textColor
                    }>
                        {
                        cardsData[3].title
                    } </CardTitle>
                </Card>
            </CardsGrid>
        </WhyAarasoftContainer>
    )
}

export default WhyAarasoft
