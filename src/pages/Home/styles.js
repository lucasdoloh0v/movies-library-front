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

    margin-bottom: 40px;

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
  padding: 0 16px;

  overflow-y: auto;

  > div:last-child {
    margin: 0;
  }
`;
