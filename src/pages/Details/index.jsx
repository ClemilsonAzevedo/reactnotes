import { Container } from './style'
import { Button } from '../../components/button'

export function Details() {
  return (
    <Container>

      <h1>Hello World</h1>
      <span>Clemilson Azevedo</span>

      <Button title = 'Back'/>
      <Button title = 'Stay'/>
      <Button title ='Home'/>
    </Container>
  )
}
