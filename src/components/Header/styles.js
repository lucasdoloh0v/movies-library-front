import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 123px;

  > h1 {
    width: 100%;
    max-width: 174px;
    margin-right: 64px;

    font-size: 24px;

    color: ${({ theme }) => theme.colors.pink};
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 174px;

  margin-left: 64px;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    width: 100%;
    padding-right: 8px;

    p {
      font-size: 14px;
      font-weight: 700;

      color: ${({ theme }) => theme.colors.gray_100};
    }

    button {
      border: none;
      background: transparent;

      color: ${({ theme }) => theme.colors.gray_300};
    }
  }

  img {
    width: 64px;
    height: 64px;

    border: 1px solid ${({ theme }) => theme.colors.gray_800};
    border-radius: 50%;
  }
`;
