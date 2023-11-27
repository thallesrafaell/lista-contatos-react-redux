import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Contatos from '../../models/Contatos'

type ContatosState = {
  itens: Contatos[]
}

const initialState: ContatosState = {
  itens: [
    {
      nome: 'Thalles',
      email: 'thallesrafaelf@gmail.com',
      numero: '34997653710'
    },
    {
      nome: 'pedro',
      email: 'pedro@gmail.com',
      numero: '3499765810'
    },
    {
      nome: 'Jao',
      email: 'joao@gmail.com',
      numero: '34997653910'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'Lista de contatos',
  initialState,
  reducers: {
    cadastrar: (state, action: PayloadAction<Contatos>) => {
      const contatoExiste = state.itens.find((contato) => {
        return contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      })
      if (contatoExiste) {
        alert('Contato Já Adcionado na lista')
      } else {
        state.itens.push(action.payload)
        console.log(action.payload)
        console.log(state)
      }
    },
    excluir: (state, action: PayloadAction<string>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.nome !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contatos>) => {
      const index = state.itens.findIndex((t) => t.nome === action.payload.nome)
      if (index >= 0) {
        state.itens[index] = action.payload
      }
    }
  }
})

export const { cadastrar, excluir, editar } = contatosSlice.actions

export default contatosSlice.reducer
