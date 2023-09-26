import { Container, Links } from './style'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'

export function Details() {
  return (
    <Container>
      <Header />

      <ButtonText title={'Excluir nota'} />

      <Section title={'Links Uteis'}>
        <Links>
          <li>
            <a href="#">Link1</a>
          </li>
        </Links>
      </Section>

      <Section title={'Marcadores'}>
        <Tag title={'express'} />
        <Tag title={'Notes'} />
      </Section>

      <Button title="Back" />
    </Container>
  )
}
