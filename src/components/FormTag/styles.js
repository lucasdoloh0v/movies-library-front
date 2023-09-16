import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 56px;
  padding: 16px;

  border-radius: 10px;

  > svg {
    color: ${({ theme }) => theme.colors.pink};
    margin-left: 16px;
  }

  > p {
    font-size: 16px;
    line-height: 16px;
  }

  ${({ theme, $isActive }) =>
    $isActive
      ? css`
          border: none;

          background-color: ${theme.colors.background_900};
          color: ${theme.colors.white};
        `
      : css`
          border: 1px dashed ${({ theme }) => theme.colors.white};

          color: ${theme.colors.gray_400};
          background-color: ${theme.colors.gray_400};
        `}
`;
