import Formulario from './containers/Formulario'
import ListaContatos from './containers/ListaContatos'
import { Container, EstiloGlobal } from './styles'

function App() {
  return (
    <div className="App">
      <EstiloGlobal />
      <Container>
        <Formulario />
        <ListaContatos />
      </Container>
    </div>
  )
}

export default App
