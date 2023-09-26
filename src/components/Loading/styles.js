import styled from 'styled-components';

export const Container = styled.div`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  > div {
    width: 50px;
    height: 50px;
    border: 10px solid ${({ theme }) => theme.colors.pink}; /* Light grey */
    border-top: 10px solid ${({ theme }) => theme.colors.background_800}; /* Black */
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
  }
`;
