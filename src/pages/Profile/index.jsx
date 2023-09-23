import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import avatarPlaceolder from '../../assets/avatar_placeholder.svg';

import { Avatar, Container, Header, ProfileForm } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function Profile() {
  const { user, updateProfile } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceolder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  async function handleUpdate(e) {
    e.preventDefault();
    const userUpdated = {
      name,
      email,
      password,
      old_password: oldPassword,
    };

    await updateProfile(userUpdated, avatarFile);
  }

  function handleChangeAvatar(e) {
    const file = e.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <Header>
        <Button title="voltar" icon={FiArrowLeft} variant="text-button" onClick={() => navigate(-1)} />
      </Header>

      <ProfileForm>
        <Avatar>
          <img src={avatar} alt="usuário" />

          <label htmlFor="input-camera">
            <FiCamera size={20} />
            <input type="file" id="input-camera" onChange={handleChangeAvatar} />
          </label>
        </Avatar>

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
          placeholder="Senha atual"
          type="password"
          value={oldPassword}
          onChange={({ target }) => setOldPassword(target.value)}
        />
        <Input
          icon={FiLock}
          placeholder="Nova senha"
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />

        <Button title="Salvar" className="saveBtn" type="submit" onClick={handleUpdate} />
      </ProfileForm>
    </Container>
  );
}
