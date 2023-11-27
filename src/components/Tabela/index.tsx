import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { excluir, editar } from '../../store/reducers/contatos'
import {
  BotaoEditar,
  BotaoSalvar,
  BotaoTabela,
  Td,
  TdExcluir,
  TextArea
} from './styles'
import Contatos from '../../models/Contatos'

type Props = Contatos

const Tabela = ({ nome, numero, email }: Props) => {
  const dispatch = useDispatch()
  const [contatoEmail, setContatoEmail] = useState('')
  const [contatoNumero, setContatoNumero] = useState('')
  const [contatoNome, setContatoNome] = useState('')
  const [editando, setEditando] = useState(false)

  useEffect(() => {
    setContatoEmail(email)
    setContatoNumero(numero)
    setContatoNome(nome)
  }, [numero, email, nome])

  const cancelarEdicao = () => {
    setEditando(false)
    setContatoEmail(email)
    setContatoNumero(numero)
    setContatoNome(nome)
  }

  return (
    <>
      <Td>
        <TextArea
          disabled={!editando}
          value={contatoNome}
          onChange={(evento) => {
            setContatoNome(evento.target.value)
          }}
        />
      </Td>
      <Td>
        <TextArea
          disabled={!editando}
          value={contatoEmail}
          onChange={(evento) => {
            setContatoEmail(evento.target.value)
          }}
        />
      </Td>
      <Td>
        <TextArea
          disabled={!editando}
          value={contatoNumero}
          onChange={(evento) => {
            setContatoNumero(evento.target.value)
          }}
        />
      </Td>
      {editando ? (
        <>
          <BotaoSalvar
            onClick={() => {
              dispatch(
                editar({
                  nome: contatoNome,
                  email: contatoEmail,
                  numero: contatoNumero
                })
              )
              setEditando(false)
            }}
          >
            Salvar
          </BotaoSalvar>
          <BotaoTabela onClick={() => cancelarEdicao()}>Cancelar</BotaoTabela>
        </>
      ) : (
        <>
          <BotaoTabela onClick={() => dispatch(excluir(nome))}>
            Excluir
          </BotaoTabela>
          <BotaoEditar onClick={() => setEditando(true)}>Editar</BotaoEditar>
        </>
      )}
    </>
  )
}
export default Tabela
