import { Input } from '../../components/Input'
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Container, Form } from './style'
import { Button } from '../../components/Button'

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>

      <Form>
        <Input placeholder="Name" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="email" icon={FiMail} />
        <Input placeholder="Old Password" type="password" icon={FiLock} />
        <Input placeholder="New Password" type="password" icon={FiLock} />

        <Button title={'Save'} />
      </Form>
    </Container>
  )
}
