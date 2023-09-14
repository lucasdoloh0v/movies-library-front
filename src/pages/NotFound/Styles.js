import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${({ theme }) => theme.colors.pink};
    font-size: 48px;
  }

  p {
    color: ${({ theme }) => theme.colors.gray_300};
  }
`;
