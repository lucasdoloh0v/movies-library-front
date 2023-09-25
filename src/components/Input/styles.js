import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  border-radius: 10px;
  padding-left: 16px;

  background-color: ${({ theme }) => theme.colors.background_800};
  color: ${({ theme }) => theme.colors.gray_300};

  margin-top: 8px;

  > input {
    width: 100%;
    height: 56px;
    padding: 12px;

    background: transparent;
    border: none;

    color: ${({ theme }) => theme.colors.white};

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray_300};
    }

    &:focus {
      outline: none;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
