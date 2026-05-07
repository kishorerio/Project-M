import React from 'react'
import styled, { keyframes } from 'styled-components'
import { CardComponent } from '../ui/CardComponent'
import reviewsData from '../../data/reviews.json'
import theme from '../../theme/theme'

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const ReviewsContainer = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 2rem 0;
  margin-bottom: 6.25rem;

  @media (max-width: 768px) {
    padding: 1.5rem 0;
    margin-bottom: 3rem;
  }

  @media (max-width: 320px) {
    padding: 1rem 0;
    margin-bottom: 2rem;
  }
`;

const Title = styled.h2`
  font-family: 'Pangram-Regular', sans-serif;
  font-weight: 600;
  font-size: 3.375rem;
  line-height: 120%;
  color: ${theme.colors.secondary};
  margin: 0 0 2.6rem 2.5rem;

  span {
    color: ${theme.colors.primary};
  }

  @media (max-width: 960px) {
    font-size: 1.75rem;
    margin: 0 1rem 1.25rem;
  }

  @media (max-width: 320px) {
    font-size: 1.5rem;
    margin: 0 0.75rem 1rem;
  }
`;

const ReviewsContent = styled.div`
  display: flex;
  animation: ${scroll} 60s linear infinite;
  width: fit-content;

  &:hover {
    animation-play-state: paused;
  }
`;

const ReviewsWrapper = styled.div`
  display: flex;
  gap: 0;
`;

export const Reviews = () => {
  // Triple the reviews array for seamless infinite scrolling
  const infiniteReviews = [...reviewsData, ...reviewsData, ...reviewsData];

  return (
    <ReviewsContainer>
      <Title>What Our <span>Students<br/> Says</span></Title>
      <ReviewsContent>
        <ReviewsWrapper>
          {infiniteReviews.map((review, index) => (
            <CardComponent
              key={`${review.id}-${index}`}
              name={review.name}
              role={review.role}
              subject={review.subject}
              review={review.review}
              rating={review.rating}
              profileImage={review.profileImage}
            />
          ))}
        </ReviewsWrapper>
      </ReviewsContent>
    </ReviewsContainer>
  )
}
