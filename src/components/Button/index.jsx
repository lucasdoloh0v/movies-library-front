import { Container } from './styles';

export function Button({ variant = 'primary', icon: Icon, title, ...rest }) {
  return (
    <Container $variant={variant} {...rest}>
      {Icon && <Icon />}
      <p>{title}</p>
    </Container>
  );
}
