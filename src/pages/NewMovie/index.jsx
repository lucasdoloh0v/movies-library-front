import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { Container, MovieForm, Tags, TextArea } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { FormTag } from '../../components/FormTag';

export function NewMovie() {
  const navigate = useNavigate();

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
          <Input placeholder="Titulo" />
          <Input placeholder="Sua nota (de 0 a 5)" />
        </div>

        <TextArea placeholder="Observações" />

        <h4>Tags</h4>
        <Tags>
          <FormTag title="Suspense" isActive />
          <FormTag />
        </Tags>
        <div className="row-div">
          <Button title="Excluir filme" type="button" variant="secondary" />
          <Button title="Salvar" type="submit" />
        </div>
      </MovieForm>
    </Container>
  );
}
