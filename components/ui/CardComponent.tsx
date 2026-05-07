import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import theme from '../../theme/theme'

interface CardProps {
  name: string;
  role: string;
  subject: string;
  review: string;
  rating: number;
  profileImage: string;
}

const Card = styled.div`
  background-color: #F5F5F5;
  border-radius: 1.25rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  min-width: 350px;
  height: 24.8125rem;
  margin-right: 2rem;

  @media (max-width: 768px) {
    min-width: 280px;
    margin-right: 1rem;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    min-width: 240px;
    margin-right: 0.75rem;
  }

  @media (max-width: 320px) {
    min-width: 200px;
    margin-right: 0.5rem;
    padding: 0.75rem;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  margin-bottom: 2.188rem;

  @media (max-width: 580px) {
    margin-bottom: 0.75rem;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  flex: 1;
  margin-bottom: 3.188rem;

  @media (max-width: 580px) {
    margin-bottom: 1rem;
  }
`;

const ProfileImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  width: 62px;
  height: 62px;

  @media (max-width: 580px) {
    width: 3rem !important;
    height: 3rem !important;
  }
`;

const Name = styled.h3`
  font-family: 'Pangram-Bold', sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  color: ${theme.colors.secondary};
  margin: 0;

  @media (max-width: 580px) {
    font-size: 1rem;
  }
`;

const Role = styled.p`
  font-family: 'Pangram-Medium', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: ${theme.colors.secondaryTextColor};
  margin: 0;

  @media (max-width: 580px) {
    font-size: 0.875rem;
  }
`;

const Subject = styled.p`
  font-family: 'Pangram-Bold', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: ${theme.colors.secondary};
  margin: 0;

  @media (max-width: 580px) {
    font-size: 1rem;
  }
`;

const ReviewText = styled.p`
  font-family: 'Pangram-Regular', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: ${theme.colors.secondaryTextColor};
  line-height: 150%;
  margin: 0.5rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 580px) {
    font-size: 0.875rem;
  }
`;

const Stars = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const Star = styled.span<{ filled: boolean }>`
  color: ${props => props.filled ? theme.colors.primary : '#E0E0E0'};
  font-size: 1.25rem;
`;

export const CardComponent: React.FC<CardProps> = ({
  name,
  role,
  subject,
  review,
  rating,
  profileImage
}) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} filled={index < rating}>
        ★
      </Star>
    ));
  };

  return (
    <Card>
      <div>
        <ProfileSection>
          <ProfileImage
            src={profileImage}
            alt={`${name} profile`}
            width={62}
            height={62}
          />
          <ProfileInfo>
            <Name>{name}</Name>
            <Role>{role}</Role>
          </ProfileInfo>
        </ProfileSection>
        <ContentWrap>
          <Subject>{subject}</Subject>
          <ReviewText>{review}</ReviewText>
        </ContentWrap>
      </div>
      <Stars>{renderStars()}</Stars>
    </Card>
  )
}
