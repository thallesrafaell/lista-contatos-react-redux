import { useState, FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { cadastrar } from '../../store/reducers/contatos'
import { RootReducer } from '../../store'

import { BotaoEditar, BotaoTabela, Table, Td, Th } from './styles'

const Tabela = () => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.cadastra)

  return (
    <>
      <Table cellSpacing={0}>
        <thead>
          <tr>
            <Th>Nome </Th>
            <Th>Telefone</Th>
            <Th>E-mail</Th>
          </tr>
        </thead>
        <tbody>
          {itens.map((contato) => (
            <tr key={contato.numero}>
              <Td>{contato.nome}</Td>
              <Td>{contato.email}</Td>
              <Td>{contato.numero}</Td>
              <BotaoTabela>X</BotaoTabela>
              <BotaoEditar>Editar</BotaoEditar>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
export default Tabela
