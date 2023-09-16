import { FiPlus, FiX } from 'react-icons/fi';

import { Container } from './styles';

export function FormTag({ title, isActive = false, ...rest }) {
  return (
    <Container $isActive={isActive} {...rest}>
      <p>{title ?? 'Nova tag'}</p>
      {isActive ? <FiX size={22} /> : <FiPlus size={22} />}
    </Container>
  );
}
