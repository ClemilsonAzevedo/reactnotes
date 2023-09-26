import { Container } from './style'

export function Button({ children, ...rest }) {
  return <Container type="button">
    {children}
  </Container>
}
