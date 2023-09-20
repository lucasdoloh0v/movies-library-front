import { FiLock, FiMail, FiUser, FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Container } from './styles';
import { Input } from '../Input';
import { Button } from '../Button';
import { useState } from 'react';

export function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      return alert('preencha todos os campos');
    }

    try {
      await api.post('/users', { name, email, password });
      alert('Usuário cadastrado com sucesso');

      navigate('/');
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message);
      } else {
        return alert('Não foi possivel cadastrar o usuário');
      }
    }
  };

  return (
    <Container>
      <h3>Crie sua conta</h3>
      <Input
        icon={FiUser}
        placeholder="Nome"
        type="text"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
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

      <Button title="Cadastrar" type="submit" className="registerBtn" onClick={handleSignUp} />
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
