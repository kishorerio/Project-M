'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import theme from '../../theme/theme';

interface ButtonProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  width?: string;
  iconSrc?: string;
  iconAlt?: string;
  onClick?: () => void;
  className?: string;
  textSize?: string;
}

const StyledButton = styled.button<{
  $bgColor: string;
  $textColor: string;
  $width: string;
  $textSize: string;
}>`
  background-color: ${props => props.$bgColor};
  color: ${props => props.$textColor};
  border: none;
  border-radius: 41.67px;
  padding: 0.875rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: ${props => props.$textSize};
  font-family: 'Pangram-Regular', sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: ${props => props.$width};
  white-space: nowrap;

  // &:hover {
  //   background-color: ${theme.colors.white};
  //   color: ${theme.colors.secondary};
  //   transform: translateY(-2px);
  //   border: 1px solid ${theme.colors.secondary}
  // }
`;

const Button: React.FC<ButtonProps> = ({
  text,
  bgColor = theme.colors.primary,
  textColor = theme.colors.secondary,
  width = 'auto',
  iconSrc,
  iconAlt = 'icon',
  onClick,
  className,
  textSize = theme.fontSize.h1,
}) => {
  return (
    <StyledButton
      $bgColor={bgColor}
      $textColor={textColor}
      $width={width}
      $textSize={textSize}
      onClick={onClick}
      className={className}
    >
      {iconSrc && (
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={20}
          height={20}
        />
      )}
      {text}
    </StyledButton>
  );
};

export default Button;
