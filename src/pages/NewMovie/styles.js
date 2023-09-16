import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 118px auto;
  grid-template-areas: 'header' 'content';
`;

export const MovieForm = styled.form`
  grid-area: content;

  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1137px;
  height: 85%;
  margin: 40px auto 0;
  padding: 0 16px;

  overflow-y: auto;

  .backBtn {
    justify-content: flex-start;
  }

  > h3 {
    margin-top: 24px;

    font-size: 36px;
    font-weight: 500;
  }

  .row-div {
    display: flex;
    justify-content: space-between;

    margin-top: 40px;

    div,
    button {
      max-width: 536px;

      &:first-child {
        margin-right: 16px;
      }
    }
  }

  > h4 {
    margin-top: 40px;
    font-size: 20px;

    color: ${({ theme }) => theme.colors.gray_300};
  }
`;

export const TextArea = styled.textarea`
  resize: none;

  min-height: 274px;
  height: 274px;
  padding: 16px;
  margin-top: 40px;

  border: none;
  border-radius: 10px;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.background_800};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_300};
  }

  &:focus {
    outline: none;
  }
`;

export const Tags = styled.div`
  display: flex;

  min-height: 88px;
  margin-top: 24px;
  padding: 16px;
  border-radius: 8px;

  background-color: #0d0c0f;

  > div {
    margin-right: 16px;

    &:last-child {
      margin: 0;
    }
  }
`;
