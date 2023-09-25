import { Container } from './styles';

export function Button({ variant = 'primary', icon: Icon, title, size, ...rest }) {
  return (
    <Container $variant={variant} {...rest}>
      {Icon && <Icon size={size} />}
      {title && <p>{title}</p>}
    </Container>
  );
}
