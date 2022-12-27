import styled from 'styled-components';

export const Text = styled.p`
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const Input = styled.input`
  width: 100%;
  min-width: 300px;
  max-width: 500px;
  padding: ${({ theme }) => theme.spacing(4)};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  border: none;
  outline: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  background-color: white;
  color: ${({ theme }) => theme.colors.dark};
  transition: all ${({ theme }) => theme.animation.cubicBezier} 0s;
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.grey};
    border-radius: 5px;
  }
`;
