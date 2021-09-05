import styled from "styled-components";

export const H2Logo = styled.h2`
  color: ${({ colorSwitchOnRoute }) =>
    colorSwitchOnRoute ? "#ffffff" : "#0F2825"};
  font-size: 1.8rem;
  cursor: pointer;
`;

export const H1Title = styled.h1`
  color: #ffffff;
  font-size: 4.6rem;
  margin: 0;
  letter-spacing: 2px;
  text-align: center;
`;

export const DescriptionHighlight = styled.span`
  color: ${({ color }) => color};
  font-size: 3.5rem;
  letter-spacing: -1px;
  font-weight: 600;
`;
export const DescriptionDetails = styled.span`
  font-size: 3.5rem;
  color: ${({color}) => color};
  letter-spacing: -0.5px;
`;
