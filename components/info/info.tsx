import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import theme from '../../theme/theme'

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 5rem);
  margin: 0 2.5rem 6.25rem 2.5rem;
  padding: 1rem 2.063rem;
  border-radius: 1.255rem;
  background-color: ${theme.colors.bg};

  @media (max-width: 1024px) {
    width: calc(100% - 4rem);
    margin: 0 2rem 4rem 2rem;
    padding: 1rem 1.5rem;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    width: calc(100% - 2.25rem);
    margin: 0 1.125rem 3rem 1.125rem;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 0.875rem;
    justify-content: center;
  }

  @media (max-width: 580px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    padding: 0;
    position: relative;
  }
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (max-width: 768px) {
    flex: 1;
    min-width: 120px;
  }

  @media (max-width: 580px) {
    display: none;
  }
`;

const Heading = styled.h3`
  font-family: 'Pangram-Regular', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 120%;
  letter-spacing: 0%;
  color: ${theme.colors.secondaryWhite};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }

  @media (max-width: 580px) {
    font-size: 0.75rem;
  }
`;

const Value = styled.p`
  font-family: 'Pangram-Bold', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 120%;
  letter-spacing: 0%;
  color: ${theme.colors.secondary};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 580px) {
    font-size: 1rem;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 60px;
  background-color: #EDEDED;

  @media (max-width: 768px) {
    display: none;
  }
`;

const FileIcon = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: 580px) {
    display: none;
  }
`;

const MobileGrid = styled.div`
  display: none;

  @media (max-width: 580px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 1.5rem;
    width: 100%;
    padding: 0.8125rem;
  }
`;

const MobileBottomGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  flex: 1;
`;

const MobileTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const MobileHeading = styled.h3`
  font-family: 'Pangram-Regular', sans-serif;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 120%;
  color: ${theme.colors.secondaryWhite};
  margin: 0;
`;

const MobileValue = styled.p`
  font-family: 'Pangram-Bold', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  line-height: 120%;
  color: ${theme.colors.secondary};
  margin: 0;
`;

export const Info = () => {
    return (
        <Wrap>
            <FileIcon>
                <Image src="/Images/fileSvg.svg" alt="file icon"
                    width={99}
                    height={99}/>
            </FileIcon>

            <TextWrap>
                <Heading>Current Batch</Heading>
                <Value>Batch 3</Value>
            </TextWrap>
            <Divider/>
            <TextWrap>
                <Heading>Total Weeks</Heading>
                <Value>8 Weeks</Value>
            </TextWrap>
            <Divider/>
            <TextWrap>
                <Heading>Next Batch</Heading>
                <Value>Batch 4</Value>
            </TextWrap>
            <Divider/>
            <TextWrap>
                <Heading>Enrollment begins</Heading>
                <Value>Aug 01,2026</Value>
            </TextWrap>

            {/* Mobile layout */}
            <MobileGrid>
                <Image src="/Images/fileSvg.svg" alt="file icon"
                    width={69}
                    height={69}
                    style={{ width: '4.3125rem', height: '4.3125rem', flexShrink: 0 }}
                />

                <MobileBottomGrid>
                    <MobileTextWrap>
                        <MobileHeading>Current Batch</MobileHeading>
                        <MobileValue>Batch 1</MobileValue>
                    </MobileTextWrap>
                    <MobileTextWrap>
                        <MobileHeading>Total Weeks</MobileHeading>
                        <MobileValue>8 Weeks</MobileValue>
                    </MobileTextWrap>
                    <MobileTextWrap>
                        <MobileHeading>Next Batch</MobileHeading>
                        <MobileValue>Batch 2</MobileValue>
                    </MobileTextWrap>
                    <MobileTextWrap>
                        <MobileHeading>Enrollment begins</MobileHeading>
                        <MobileValue>April 15,2026</MobileValue>
                    </MobileTextWrap>
                </MobileBottomGrid>
            </MobileGrid>
        </Wrap>
    )
}
