import styled from 'styled-components';

export const Container = styled.div`
  height: ${({ $h }) => `${$h}px`};

  > svg {
    color: ${({ theme }) => theme.colors.pink};
  }
`;
