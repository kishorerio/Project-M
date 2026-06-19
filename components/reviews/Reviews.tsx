'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import styled, { keyframes } from 'styled-components'
import { CardComponent } from '../ui/CardComponent'
import reviewsData from '../../data/reviews.json'
import theme from '../../theme/theme'

const scroll = keyframes`
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const ReviewsContainer = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 2rem 0;
  margin-bottom: 6.25rem;

  @media (max-width: 768px) {
    padding: 1.5rem 0;
    margin-bottom: 4rem;
  }

  @media (max-width: 320px) {
    padding: 1rem 0;
    margin-bottom: 3rem;
  }
`;

const Title = styled.h2`
  font-family: 'Rightgrotesk-widemedium', sans-serif;
  letter-spacing: 0.5px;
  font-weight: 500;
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

/* Desktop marquee */
const MarqueeTrack = styled.div`
  display: flex;
  animation: ${scroll} 60s linear infinite;
  width: fit-content;

  &:hover {
    animation-play-state: paused;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MarqueeWrapper = styled.div`
  display: flex;
  gap: 0;
`;


const CarouselOuter = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: relative;
    width: 100%;
    overflow: hidden;
  }
`;

const CarouselTrack = styled.div<{ $offset: number; $animate: boolean }>`
  display: flex;
  transform: translateX(${({ $offset }) => $offset}px);
  transition: ${({ $animate }) => ($animate ? 'transform 0.4s ease' : 'none')};
  will-change: transform;
`;

const CarouselSlide = styled.div`
  flex: 0 0 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const DotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.25rem;
`;

const Dot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? '1.5rem' : '0.5rem')};
  height: 0.5rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  padding: 0;
  background-color: ${({ $active }) =>
    $active ? theme.colors.primary : '#D9D9D9'};
  transition: width 0.3s ease, background-color 0.3s ease;
`;

/* ─────────────────────────────────────────
   Component
───────────────────────────────────────── */

const AUTO_PLAY_INTERVAL = 3000;

export const Reviews = () => {
  const count = reviewsData.length;

  // carousel state
  const [current, setCurrent] = useState(0);
  const [offset, setOffset] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [containerWidth, setContainerWidth] = useState(0);

  const outerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // touch tracking
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  // measure slide width
  useEffect(() => {
    const measure = () => {
      if (outerRef.current) {
        setContainerWidth(outerRef.current.offsetWidth);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // sync offset when current or containerWidth changes
  useEffect(() => {
    setOffset(-current * containerWidth);
  }, [current, containerWidth]);

  const goTo = useCallback(
    (index: number) => {
      setAnimate(true);
      setCurrent((index + count) % count);
    },
    [count]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  // auto-play
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, AUTO_PLAY_INTERVAL);
  }, [next]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  // touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
    setAnimate(false);
    setOffset(-current * containerWidth + touchDeltaX.current);
  };

  const onTouchEnd = () => {
    const threshold = containerWidth * 0.25;
    if (touchDeltaX.current < -threshold) {
      goTo(current + 1);
    } else if (touchDeltaX.current > threshold) {
      goTo(current - 1);
    } else {
      setAnimate(true);
      setOffset(-current * containerWidth);
    }
    resetTimer();
  };

  // desktop: duplicate reviews for seamless loop
  const infiniteReviews = [...reviewsData, ...reviewsData];

  return (
    <ReviewsContainer>
      <Title>
        What Our <span>Students<br /> Says</span>
      </Title>

      {/* ── Desktop marquee ── */}
      <MarqueeTrack>
        <MarqueeWrapper>
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
        </MarqueeWrapper>
      </MarqueeTrack>

      {/* ── Mobile carousel ── */}
      <CarouselOuter
        ref={outerRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <CarouselTrack $offset={offset} $animate={animate}>
          {reviewsData.map((review) => (
            <CarouselSlide key={review.id}>
              <CardComponent
                name={review.name}
                role={review.role}
                subject={review.subject}
                review={review.review}
                rating={review.rating}
                profileImage={review.profileImage}
              />
            </CarouselSlide>
          ))}
        </CarouselTrack>

        <DotsWrapper>
          {reviewsData.map((_, i) => (
            <Dot
              key={i}
              $active={i === current}
              onClick={() => { goTo(i); resetTimer(); }}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </DotsWrapper>
      </CarouselOuter>
    </ReviewsContainer>
  );
};
