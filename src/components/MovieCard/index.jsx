import { Container, Description, Tags } from './styles';
import { Tag } from '../Tag';
import { Rating } from '../Rating';

export function MovieCard({ movie, ...rest }) {
  const { title, rating, description, tags } = movie;

  return (
    <Container {...rest}>
      <h2>{title}</h2>
      <Rating rating={rating} />
      <Description>{description}</Description>
      <Tags>
        {tags.map((tag) => (
          <Tag name={tag.name} key={tag.id} />
        ))}
      </Tags>
    </Container>
  );
}
