import { FiPlus, FiSearch } from 'react-icons/fi'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Note } from '../../components/Note'
import { Section } from '../../components/Section'
import { Brand, Container, Content, Menu, NewNotes, Search } from './style'

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText isactive title={'All'} />
        </li>
        <li>
          <ButtonText title={'React'} />
        </li>
        <li>
          <ButtonText title={'Nodejs'} />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Search by title" icon={FiSearch} />
      </Search>

      <Content>
        <Section title={'My notes'}>
          <Note data={{
            title: 'Rocket Modal', 
            tags: [
              {id:'1', name:'React'}, 
              {id:'2', name:'Nodejs'}
              ]
            }} />
        </Section>
      </Content>

      <NewNotes to={'/new'}>
        <FiPlus />
        Create Note
      </NewNotes>
    </Container>
  )
}
