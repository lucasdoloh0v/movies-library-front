import styled from 'styled-components';

export const Container = styled.span`
  background-color: ${({ theme }) => theme.colors.gray_800};

  padding: 5px 16px;
  margin-right: 8px;

  border-radius: 8px;

  font-size: 12px;
`;
