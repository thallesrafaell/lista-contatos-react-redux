import { Provider } from 'react-redux'
import Formulario from './containers/Formulario'
import ListaContatos from './containers/ListaContatos'
import { Container, EstiloGlobal } from './styles'

import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <EstiloGlobal />
        <Container>
          <Formulario />
          <ListaContatos />
        </Container>
      </Provider>
    </div>
  )
}

export default App
