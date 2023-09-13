import { FiLock, FiMail, FiUser, FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';
import { Input } from '../Input';
import { Button } from '../Button';

export function SignUpForm() {
  const navigate = useNavigate();

  return (
    <Container>
      <h3>Crie sua conta</h3>
      <Input icon={FiUser} placeholder="Nome" />
      <Input icon={FiMail} placeholder="E-mail" />
      <Input icon={FiLock} placeholder="Senha" type="password" />

      <Button title="Cadastrar" className="registerBtn" />
      <Button
        title="Voltar para o login"
        variant="text-button"
        type="button"
        icon={FiArrowLeft}
        onClick={() => navigate('/')}
      />
    </Container>
  );
}
