import styled from "styled-components";

export const H2 = styled.h2`
  color: ${({ colorSwitchOnServiceRoute }) => (colorSwitchOnServiceRoute ? "#ffffff" : "#0F2825")};
  font-size: 1.8rem;
`;
