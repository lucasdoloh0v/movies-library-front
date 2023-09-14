import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { Container, Description, Rating, Tags } from './styles';
import { Tag } from '../Tag';

export function MovieCard({ movie }) {
  const { title, rating, description, tags } = movie;

  const getStarsRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i <= rating - 1 ? <AiFillStar key={i} size={12} /> : <AiOutlineStar key={i} size={12} />);
    }

    return stars;
  };

  return (
    <Container>
      <h2>{title}</h2>
      <Rating>{getStarsRating(rating)}</Rating>
      <Description>{description}</Description>
      <Tags>
        {tags.map((tag) => (
          <Tag name={tag} key={tag} />
        ))}
      </Tags>
    </Container>
  );
}
