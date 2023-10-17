import { Input } from '../../components/Input'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Container, Form, Avatar } from './style'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>

      <Avatar>
        <img src="https://github.com/clemilsonazevedo.png" alt="User Clemilson Azevedo" />
        <label htmlFor="Avatar">
          <FiCamera />

          <input id='Avatar' type="file" />
        </label>
      </Avatar>

        <Input placeholder="Name" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="email" icon={FiMail} />
        <Input placeholder="Old Password" type="password" icon={FiLock} />
        <Input placeholder="New Password" type="password" icon={FiLock} />

        <Button title={'Save'} />
      </Form>
    </Container>
  )
}
