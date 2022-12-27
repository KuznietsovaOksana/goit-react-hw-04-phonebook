import styled from 'styled-components';

export const List = styled.ul`
  min-width: 300px;
  max-width: 400px;
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.spacing(7)};
`;

export const Item = styled.li`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding-right: ${({ theme }) => theme.spacing(5)};
  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-top: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  transition: all ${({ theme }) => theme.animation.cubicBezier} 0s;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.grey};
  }
`;
