import './App.css'
import MyForm from './Components/FormsW3schools'
import Garage from './Components/ListsW3schools'
import Gatos from './components/Exemplo1Lists'
import Cachorros from './components/Exemplo2Lists'
import Exemplo from './components/ExemplosForms'

function App() {

  return (
    <>
      <h1>w3schools:</h1>
      <h2>Lists</h2>
      <Garage />
      <h2>Forms</h2>
      <MyForm />
      <h1>Exemplos:</h1>
      <h2>Lists</h2>
      <Gatos />
      <Cachorros />
      <h2>Form</h2>
      <Exemplo />
    </>
  )
}

export default App
