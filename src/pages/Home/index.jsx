import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { useCallback, useEffect, useState } from 'react';

import { Container, Content, Movies } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Loading } from '../../components/Loading';
import { MovieCard } from '../../components/MovieCard';
import { api } from '../../services/api';

export function Home() {
  const [movies, setmovies] = useState([]);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  function handleSearchMovie(target) {
    setSearch(target.value);
  }

  const fetchNotes = useCallback(async () => {
    const response = await api.get(`/movie-notes?title=${search}`);
    setmovies(response.data);
  }, [search]);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  return (
    <Container>
      <Header value={search} handleSearchMovie={handleSearchMovie} />
      <Content>
        <div>
          <p>Meus filmes</p>
          <Button title="Adicionar filme" icon={FiPlus} onClick={() => navigate('/new-movie')} />
        </div>
        <Movies>
          {movies ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} onClick={() => navigate(`/movie-detail/${movie.id}`)} />
            ))
          ) : (
            <Loading />
          )}
        </Movies>
      </Content>
    </Container>
  );
}
