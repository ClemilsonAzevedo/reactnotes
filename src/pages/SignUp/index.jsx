import { Container, Form, Background } from './style'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export function SignUp() {
  return (
    <Container>
      <Background />

      <Form>
        <h1>Rocket Notes</h1>
        <p>App for save and manage your utils link</p>

        <h2>Create Account</h2>

        <Input placeholder="Name" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Password" type="password" icon={FiLock} />

        <Button title={'Sign Up'} />

        <Link to="/">Back to Login</Link>
      </Form>
    </Container>
  )
}
