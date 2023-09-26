import { Container, Profile } from './style'

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/clemilsonazevedo.png" alt="User image" />

        <div>
          <span>Welcome,</span>
          <strong>Clemilson Azevedo</strong>
        </div>
      </Profile>
    </Container>
  )
}
