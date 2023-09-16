import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { Container, Content, Movies } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { MovieCard } from '../../components/MovieCard';

const movieExample = {
  title: 'O Menu',
  rating: 4,
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellendus, laboriosam id non eius vero error nobis, rem perferendis atque soluta eum, quibusdam delectus dicta dolorem similique fuga reiciendis fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellendus, laboriosam id non eius vero error nobis, rem perferendis atque soluta eum, quibusdam delectus dicta dolorem similique fuga reiciendis fugit!',
  tags: ['Suspense', 'drama'],
};

export function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <Content>
        <div>
          <p>Meus filmes</p>
          <Button title="Adicionar filme" icon={FiPlus} onClick={() => navigate('/new-movie')} />
        </div>
        <Movies>
          <MovieCard movie={movieExample} />
          <MovieCard movie={movieExample} />
          <MovieCard movie={movieExample} />
        </Movies>
      </Content>
    </Container>
  );
}
