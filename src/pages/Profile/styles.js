import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 144px auto;
  grid-template-areas: 'header' 'content';
`;

export const Header = styled.header`
  grid-area: header;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 144px;
  padding: 0 16px;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.pink};
    opacity: 0.05;
    z-index: -1;
  }

  > button {
    justify-content: flex-start;
    max-width: 1120px;
  }
`;

export const ProfileForm = styled.form`
  grid-area: content;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 340px;
  margin: -93px auto 0;

  .saveBtn {
    margin-top: 24px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin-bottom: 64px;

  > img {
    width: 186px;
    border-radius: 50%;
  }

  > label {
    position: absolute;
    bottom: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 46px;
    height: 46px;

    color: ${({ theme }) => theme.colors.gray_800};
    background-color: ${({ theme }) => theme.colors.pink};
    border-radius: 50%;

    cursor: pointer;

    > input {
      display: none;
    }
  }
`;
