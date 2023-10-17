import { Container, Form } from "./style";
import { Header } from '../../components/Header'
import {Input} from '../../components/Input'
import { TextArea } from '../../components/TextArea'

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
        </Form>
      </main>
    </Container>
  )
}