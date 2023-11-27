import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'

import { Table, Td, Th } from './styles'

const Tabela = () => {
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
            <tr key={contato.nome}>
              <Td>{contato.nome}</Td>
              <Td>{contato.email}</Td>
              <Td>{contato.numero}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
export default Tabela
