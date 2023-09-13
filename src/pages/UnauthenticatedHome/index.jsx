import { useLocation } from 'react-router-dom';

import { SignUpForm } from '../../components/SignUpForm';
import { SignInForm } from '../../components/SignInForm';
import { BackgroundImg, Container, Content } from './styles';

export function UnauthenticatedHome() {
  const { pathname } = useLocation();

  return (
    <Container>
      <Content>
        <h1>Movies Library</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        {pathname === '/' && <SignInForm />}
        {pathname === '/register' && <SignUpForm />}
      </Content>
      <BackgroundImg />
    </Container>
  );
}
