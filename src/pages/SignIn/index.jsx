import { BackgroundImg, Container, Login } from './styles';

import { Button } from '../../components/Button';

export function SignIn() {
  return (
    <Container>
      <Login>
        <h1>Movies Library</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h3>Faça seu Login</h3>
        {/* <Input />
        <Input /> */}

        <Button title="entrar" className="enterBtn" />
        <Button title="Criar conta" variant="text-button" className="createAccBtn" />
      </Login>
      <BackgroundImg />
    </Container>
  );
}
