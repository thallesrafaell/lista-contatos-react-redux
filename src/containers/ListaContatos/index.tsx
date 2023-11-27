import Tabela from '../../components/Tabela'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store/'
import { Table, Th } from '../../components/Tabela/styles'

const ListaContatos = () => {
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
              <Tabela
                nome={contato.nome}
                email={contato.email}
                numero={contato.numero}
              />
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
export default ListaContatos
