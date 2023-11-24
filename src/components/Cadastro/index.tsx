import { Botao } from '../../styles'
import { Form, Inputs } from './styles'

const Cadastro = () => {
  return (
    <Form>
      <Inputs type="text" placeholder="Nome" />
      <Inputs type="number" placeholder="Telefone/Celular" />
      <Inputs type="text" placeholder="E-mail" />
      <Botao>+</Botao>
    </Form>
  )
}

export default Cadastro
