import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: relative;
  width: 100%;
  height: 224px;
  padding: 32px;
  margin-bottom: 24px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.pink};
    opacity: 0.05;
    border-radius: 16px;
  }

  h2 {
    font-size: 24px;
  }
`;

export const Rating = styled.div`
  margin-top: 8px;

  > svg {
    color: ${({ theme }) => theme.colors.pink};
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray_200};

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Tags = styled.div`
  margin-top: 16px;
`;
