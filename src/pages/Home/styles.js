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
  width: 80%;
  margin: 54px auto;

  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > p {
      font-size: 32px;
    }

    > button {
      max-width: 207px;
    }
  }
`;

export const Movies = styled.div`
  width: 100%;
  height: 472px;
  margin-top: 40px;

  overflow-y: auto;

  > div:last-child {
    margin: 0;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.pink};
    border-radius: 8px;
  }
`;
