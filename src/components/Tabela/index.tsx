import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { excluir, editar } from '../../store/reducers/contatos'
import { Td, TdExcluir, TextArea } from './styles'
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
          <TdExcluir
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
          </TdExcluir>
          <TdExcluir onClick={() => cancelarEdicao()}>Cancelar</TdExcluir>
        </>
      ) : (
        <>
          <TdExcluir onClick={() => dispatch(excluir(nome))}>
            Excluir Contato
          </TdExcluir>
          <TdExcluir onClick={() => setEditando(true)}>
            Editar Contato
          </TdExcluir>
        </>
      )}
    </>
  )
}
export default Tabela
