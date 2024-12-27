
import './App.css'
import MyForm from './components/MyForm'

function App() {
 

  return (
    <div className="App">
      <h1>Form REACT</h1>
      {/* passando props  */}
      <MyForm userName="André" userEmail="andrel@deeptech.com.br" />
    </div>
  )
}

export default App
