import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 300px;
  max-width: 500px;
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.spacing(7)};
  margin-bottom: ${({ theme }) => theme.spacing(7)};
`;

export const Label = styled.label`
  display: block;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  background-color: transparent;
`;

export const Input = styled.input`
  width: 100%;
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

export const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding-right: ${({ theme }) => theme.spacing(10)};
  padding-left: ${({ theme }) => theme.spacing(10)};
  padding-top: ${({ theme }) => theme.spacing(4)};
  padding-bottom: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(10)};
  transition: all ${({ theme }) => theme.animation.cubicBezier} 0s;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.grey};
  }
`;
