import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 'header' 'content';
`;

export const Content = styled.main`
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

  .row-div {
    display: flex;
    align-items: center;

    > h3 {
      font-size: 36px;
      font-weight: 500;

      color: ${({ theme }) => theme.colors.gray_100};

      margin-right: 16px;
    }

    > img {
      width: 16px;
      height: 16px;
      border-radius: 50%;

      margin-right: 8px;
    }

    > svg {
      margin-left: 16px;
      margin-right: 8px;

      color: ${({ theme }) => theme.colors.pink};
    }

    &:last-child {
      margin-top: 24px;
    }
  }
`;

export const Tags = styled.div`
  margin: 40px 0;
`;
