import styled from 'styled-components'
import { Botao } from '../../styles'

export const Table = styled.table`
  width: 550px;
  margin: 30px auto;
  tbody {
    tr {
      white-space: nowrap;
    }
  }
`
export const Th = styled.th`
  width: 100%;
  font-size: 20px;
  text-align: center;
  border-bottom: 2px solid black;
  padding: 20px auto 0;
  white-space: nowrap;
`

export const Td = styled.td`
  font-size: 18px;
  text-align: center;
  padding: 20px 10px 5px;
  border-bottom: 1.5px solid black;
  white-space: nowrap;
`
export const BotaoTabela = styled(Botao)`
  width: 90px;
  margin: 20px 10px 0;
  &:hover {
    background-color: red;
    color: white;
    border-color: transparent;
  }
`

export const BotaoEditar = styled(Botao)`
  margin-top: 20px;
  width: 60px;
  &:hover {
    background-color: #ffd700;
    color: black;
    border-color: transparent;
  }
`

export const TdExcluir = styled(Td)`
  padding: 20px 5px 5px;
  border: 1.5px solid white;
  background-color: red;
  border-radius: 5px;
  color: white;

  cursor: pointer;
`

export const TextArea = styled.textarea`
  resize: none;
  border: none;
  text-align: center;
  font-size: 18px;
  white-space: nowrap;
  width: 240px;
  background-color: #f0f0f0;
`
export const BotaoSalvar = styled(BotaoTabela)`
  &:hover {
    background-color: green;
  }
`
