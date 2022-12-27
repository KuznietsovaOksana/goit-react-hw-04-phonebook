import styled from 'styled-components';

export const Heading = styled.h2`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-bottom: ${({ theme }) => theme.spacing(7)};
`;
