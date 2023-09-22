import { useState } from 'react';
import { FiLock, FiMail } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Container } from './styles';
import { Input } from '../Input';
import { Button } from '../Button';

export function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { signIn } = useAuth();

  function handleSignIn(e) {
    e.preventDefault();

    signIn({ email, password });
  }

  return (
    <Container>
      <h3>Faça seu Login</h3>
      <Input
        icon={FiMail}
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <Input
        icon={FiLock}
        placeholder="Senha"
        type="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />

      <Button title="Entrar" type="submit" className="enterBtn" onClick={handleSignIn} />
      <Button title="Criar conta" variant="text-button" type="button" onClick={() => navigate('/register')} />
    </Container>
  );
}
