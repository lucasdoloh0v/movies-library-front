import { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Container, MovieForm, Tags, TextArea } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { FormTag } from '../../components/FormTag';

export function NewMovie() {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const navigate = useNavigate();

  function handleAddTag() {
    setTags((prev) => [...prev, newTag]);
    setNewTag('');
  }

  function handleRemoveTag(tagToRemove) {
    setTags((prev) => prev.filter((tag) => tag !== tagToRemove));
  }

  async function handleCreateNote(e) {
    e.preventDefault();
    try {
      if (!tags.length) {
        throw new Error('Adicione ao menos uma tag');
      }
      await api.post('/movie-notes', { title, description, rating, tags });

      alert('Filme criado com sucesso');
      navigate('/');
    } catch (errors) {
      if (errors.message) {
        return alert(errors.message);
      }
      return alert('não foi possivel cadastrar o filme');
    }
  }

  return (
    <Container>
      <Header />
      <MovieForm>
        <Button
          title="voltar"
          icon={FiArrowLeft}
          type="button"
          variant="text-button"
          className="backBtn"
          onClick={() => navigate(-1)}
        />

        <h3>Novo filme</h3>

        <div className="row-div">
          <Input placeholder="Titulo" value={title} onChange={({ target }) => setTitle(target.value)} />
          <Input
            placeholder="Sua nota (de 0 a 5)"
            type="number"
            min="0"
            max="5"
            value={rating}
            onChange={({ target }) => setRating(target.value)}
          />
        </div>

        <TextArea
          placeholder="Observações"
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />

        <h4>Tags</h4>
        <Tags>
          {tags.map((tag) => (
            <FormTag key={tag} value={tag} callback={() => handleRemoveTag(tag)} isActive />
          ))}
          <FormTag value={newTag} onChange={({ target }) => setNewTag(target.value)} callback={handleAddTag} />
        </Tags>
        <div className="row-div">
          <Button title="Excluir filme" type="button" variant="secondary" />
          <Button title="Salvar" type="submit" onClick={handleCreateNote} />
        </div>
      </MovieForm>
    </Container>
  );
}
