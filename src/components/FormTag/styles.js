import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 56px;
  padding: 16px;

  border-radius: 10px;

  > svg {
    color: ${({ theme }) => theme.colors.pink};
  }

  > input {
    font-size: 16px;
    line-height: 16px;
    max-width: 199px;

    background: transparent;
    border: none;

    &:focus {
      outline: none;
    }
  }

  ${({ theme, $isActive }) =>
    $isActive
      ? css`
          border: none;

          background-color: ${theme.colors.background_900};

          > input {
            color: ${theme.colors.white};
          }
        `
      : css`
          border: 1px dashed ${({ theme }) => theme.colors.white};

          background-color: ${theme.colors.gray_400};
          > input {
            color: ${theme.colors.white};
          }
        `}
`;
