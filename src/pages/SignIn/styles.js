import styled from 'styled-components';

import backgroundImg from '../../assets/background-img.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Login = styled.form`
  display: flex;

  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin: 0 224px;
  max-width: 352px;

  > h1 {
    color: ${({ theme }) => theme.colors.pink};
    font-size: 48px;
    font-weight: 700;
  }

  > p {
    color: ${({ theme }) => theme.colors.gray_200};
    font-size: 14px;
  }

  > h3 {
    font-size: 24px;
    font-weight: 500;

    margin-top: 48px;
  }

  .enterBtn {
    margin-top: 24px;
  }

  .createAccBtn {
    margin-top: px;
  }
`;

export const BackgroundImg = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
