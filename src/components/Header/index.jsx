import { Container, Profile, Logout } from './style'
import { RiShutDownLine } from 'react-icons/ri'

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

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
