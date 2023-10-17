import { Container, Form, Background } from './style'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>App for save and manage your utils link</p>

        <h2>Login</h2>

        <Input placeholder= 'E-mail' type='text' icon={FiMail} />
        <Input placeholder='Password' type='password' icon={FiLock} />

        <Button title={'Login'} />

        <Link to={'/register'}>Create account</Link>
      </Form>

      <Background />
    </Container>
  )
}
