import { Container, Brand, Menu, Search, Content, NewNotes } from './style'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>
          RocketNotes
        </h1>
      </Brand>

      <Header />
      
      <Menu>
        <li>
          <ButtonText isActive title={'All'} />
        </li>
        <li>
          <ButtonText title={'React'} />
        </li>
        <li>
          <ButtonText title={'Nodejs'} />
        </li>
      </Menu>

      <Search>


      </Search>

      <Content>

      </Content>

      <NewNotes>

      </NewNotes>

    </Container>
  )
}
