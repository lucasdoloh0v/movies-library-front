import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { Avatar, Container, Header, ProfileForm } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function Profile() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <Button title="voltar" icon={FiArrowLeft} variant="text-button" onClick={() => navigate('/')} />
      </Header>

      <ProfileForm>
        <Avatar>
          <img src="https://github.com/lucasdoloh0v.png" alt="usuário" />

          <label htmlFor="input-camera">
            <FiCamera size={20} />
            <input type="file" id="input-camera" />
          </label>
        </Avatar>

        <Input icon={FiUser} placeholder="Nome" type="text" />
        <Input icon={FiMail} placeholder="E-mail" type="email" />
        <Input icon={FiLock} placeholder="Senha atual" type="password" />
        <Input icon={FiLock} placeholder="Nova senha" type="password" />

        <Button title="Salvar" className="saveBtn" />
      </ProfileForm>
    </Container>
  );
}
