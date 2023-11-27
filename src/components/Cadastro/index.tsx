import { Form, Inputs } from './styles'
import { useState, FormEvent } from 'react'
import { useDispatch } from 'react-redux'

import { cadastrar } from '../../store/reducers/contatos'
import { Botao } from '../../styles'

const Cadastro = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')
  const dispatch = useDispatch()

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    dispatch(
      cadastrar({
        nome,
        email,
        numero
      })
    )
  }

  return (
    <Form onSubmit={cadastrarTarefa}>
      <Inputs
        value={nome}
        type="text"
        placeholder="Nome"
        onChange={({ target }) => setNome(target.value)}
      />
      <Inputs
        value={numero}
        type="text"
        placeholder="Telefone/Celular"
        onChange={({ target }) => setNumero(target.value)}
      />
      <Inputs
        value={email}
        type="text"
        placeholder="E-mail"
        onChange={({ target }) => setEmail(target.value)}
      />
      <Botao>+</Botao>
    </Form>
  )
}

export default Cadastro
