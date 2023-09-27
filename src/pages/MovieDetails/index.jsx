import { useCallback, useEffect, useState } from 'react';
import { FiArrowLeft, FiClock } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';

import avatarPlaceolder from '../../assets/avatar_placeholder.svg';

import { Container, Content, Tags } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Rating } from '../../components/Rating';
import { Tag } from '../../components/Tag';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

export function MovieDetails() {
  const [movie, setMovie] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceolder;

  const fetchMovie = useCallback(async () => {
    try {
      const response = await api.get(`/movie-notes/${id}`);
      setMovie(response.data);
    } catch {
      navigate('/not-found');
    }
  }, [id, navigate]);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  return (
    <Container>
      <Header />
      {!!Object.keys(movie).length && (
        <Content>
          <Button
            title="voltar"
            icon={FiArrowLeft}
            type="button"
            variant="text-button"
            className="backBtn"
            onClick={() => navigate(-1)}
          />

          <div className="row-div">
            <h3>{movie.title}</h3>
            <Rating rating={4} size={20} />
          </div>

          <div className="row-div">
            <img src={avatarUrl} alt="" />
            <p>Por {user.name}</p>

            <FiClock />
            <p>{movie.created_at}</p>
          </div>

          <Tags>
            {movie.movieTags.map((tag) => (
              <Tag name={tag.name} key={tag.id} />
            ))}
          </Tags>

          <p>{movie.description}</p>
        </Content>
      )}
    </Container>
  );
}
