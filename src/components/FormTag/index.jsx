import { FiPlus, FiX } from 'react-icons/fi';

import { Container } from './styles';
import { Button } from '../Button';

export function FormTag({ value, callback, isActive = false, ...rest }) {
  return (
    <Container $isActive={isActive}>
      <input value={value} placeholder="Nova tag" readOnly={isActive} {...rest} />
      <Button type="button" variant="text-button" size={22} icon={isActive ? FiX : FiPlus} onClick={callback} />
    </Container>
  );
}
