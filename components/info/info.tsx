import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import theme from '../../theme/theme'

const Wrap = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 5rem);
  margin: 0 2.5rem 6.25rem 2.5rem;
  padding: 1rem 2.063rem;
  border-radius: 1.255rem;
  background-color: ${
    theme.colors.bg
};
`;

const TextWrap = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Heading = styled.h3 `
  font-family: 'Pangram-Regular', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  letter-spacing: 0%;
  color: ${
    theme.colors.secondaryWhite
};
  margin: 0;
`;

const Value = styled.p `
  font-family: 'Pangram-Bold', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: 0%;
  color: ${
    theme.colors.secondary
};
  margin: 0;
`;

const Divider = styled.div `
  width: 1px;
  height: 60px;
  background-color: #EDEDED;
`;

export const Info = () => {
    return (
        <Wrap>
            <Image src="Images/fileSvg.svg" alt="file icon"
                width={99}
                height={99}/>

            <TextWrap>
                <Heading>Current Batch</Heading>
                <Value>Batch 1</Value>
            </TextWrap>
            <Divider/>
            <TextWrap>
                <Heading>Total Weeks</Heading>
                <Value>8 Weeks</Value>
            </TextWrap>
            <Divider/>
            <TextWrap>
                <Heading>Next Batch</Heading>
                <Value>Batch 2</Value>
            </TextWrap>
            <Divider/>
            <TextWrap>
                <Heading>Enrollment begins</Heading>
                <Value>April 15,2026</Value>
            </TextWrap>
        </Wrap>
    )
}
