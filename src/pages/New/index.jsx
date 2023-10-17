import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { TextArea } from '../../components/TextArea';
import { Container, Form } from "./style";

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Create Note</h1>
            <a href="/">Back</a>
          </header>

          <Input placeholder="Title" />

          <TextArea placeholder={"Comments"} />

          <Section title={'Utils Links'}>
            <NoteItem value='https://clemilsonazevedo.vercel.app' />
            <NoteItem isNew placeholder='New Link' />
          </Section>

          <Section title={'Markups'}>
            <div className="tags">
              <NoteItem value='react' />
              <NoteItem isNew placeholder='New Tag' />
            </div>
          </Section>

          <Button title={'Salvar'} />
        </Form>
      </main>
    </Container>
  )
}