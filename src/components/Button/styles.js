import styled, { css } from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 50px;

  border: none;

  > svg {
    margin-right: 8px;
  }

  ${({ $variant, theme }) =>
    $variant === 'primary' &&
    css`
      background-color: ${theme.colors.pink};
      color: ${theme.colors.gray_800};

      border-radius: 10px;
    `}

  ${({ $variant, theme }) =>
    $variant === 'text-button' &&
    css`
      background-color: transparent;
      color: ${theme.colors.pink};
    `}
`;
