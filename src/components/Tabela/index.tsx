import { Botao } from '../../styles'
import { BotaoEditar, BotaoTabela, Table, Td, Th } from './styles'

const Tabela = () => {
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
          <tr>
            <Td>Thales</Td>
            <Td>thallesrafaelf@gmail.com</Td>
            <Td>12312441542</Td>
            <BotaoTabela>X</BotaoTabela>
            <BotaoEditar>Editar</BotaoEditar>
          </tr>
          <tr>
            <Td>Thales</Td>
            <Td>thallesrafaelf@gmail.com</Td>
            <Td>12312441542</Td>
            <BotaoTabela>X</BotaoTabela>
            <BotaoEditar>Editar</BotaoEditar>
          </tr>
          <tr>
            <Td>Thales</Td>
            <Td>thallesrafaelf@gmail.com</Td>
            <Td>12312441542</Td>
            <BotaoTabela>X</BotaoTabela>
            <BotaoEditar>Editar</BotaoEditar>
          </tr>
          <tr>
            <Td>Thales</Td>
            <Td>thallesrafaelf@gmail.com</Td>
            <Td>12312441542</Td>
            <BotaoTabela>X</BotaoTabela>
            <BotaoEditar>Editar</BotaoEditar>
          </tr>
        </tbody>
      </Table>
    </>
  )
}
export default Tabela
