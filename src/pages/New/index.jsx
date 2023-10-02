import { Container, Form } from "./style";
import { Header } from '../../components/Header'
import {Input} from '../../components/Input'


export function New(){

  return(

    <Container>
      <Header/>
      <main>
        <Form>
          <header>
            <h1>Create Note</h1>
            <a href="/">Back</a>
          </header>

          <Input placeholder='Title' />
        </Form>
      </main>
    </Container>
  )
}