import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { excluir } from '../../store/reducers/contatos'
import { useDispatch } from 'react-redux'

import { Table, Td, Th, TdExcluir } from './styles'
import Contatos from '../../models/Contatos'

type Props = Contatos

const Tabela = ({ nome, numero, email }: Props) => {
  const { itens } = useSelector((state: RootReducer) => state.cadastra)
  const dispatch = useDispatch()

  return (
    <>
      <Td>{nome}</Td>
      <Td>{email}</Td>
      <Td>{numero}</Td>
      <TdExcluir onClick={() => dispatch(excluir(nome))}>
        Excluir Contato
      </TdExcluir>
    </>
  )
}
export default Tabela
