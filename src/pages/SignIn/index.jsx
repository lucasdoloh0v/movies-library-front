import { BackgroundImg, Container, Login } from './styles';

export function SignIn() {
  return (
    <Container>
      <Login>
        <h1>Movies Library</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h3>Faça seu Login</h3>
        {/* <Input />
        <Input />

        <Button title='entrar' />
        <Button title='Criar conta' variant='text-button' /> */}
      </Login>
      <BackgroundImg />
    </Container>
  );
}
