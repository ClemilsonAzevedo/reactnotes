import { Container, Links, Content } from './style'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title={'Remove Note'} />

          <h1>Introduction to React</h1>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularized in the 1960s
            with the release of Let sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldo
            PageMaker including versions of Lorem Ipsum.
          </p>

          <Section title={'Utils Links'}>
            <Links>
              <li>
                <a href="#">https://Clemilsonazevedo.github.io/Devlinks</a>
                <a href="#">https://github.com/clemilsonazevedo</a>
                <a href="#">https://clemilsonazevedo.dev</a>
              </li>
            </Links>
          </Section>

          <Section title={'Marks'}>
            <Tag title={'express'} />
            <Tag title={'Notes'} />
          </Section>

          <Button title="Back" />
        </Content>
      </main>
    </Container>
  )
}
