import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { Container } from './styles';

export function Rating({ rating, size = 12 }) {
  const getStarsRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i <= rating - 1 ? <AiFillStar key={i} size={size} /> : <AiOutlineStar key={i} size={size} />);
    }

    return stars;
  };

  return <Container $h={size}>{getStarsRating(rating)}</Container>;
}
