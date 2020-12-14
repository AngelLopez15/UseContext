import {useState} from 'react'
import { SumaContext} from './components/SumaContext';
import Graficas from './components/Graficas';
import Tablas from './components/Tablas';
import './App.css';


function App() {

  // Declaramos la suma global que se va usar en todos los componentes
  let sumaglobal = 0
  
  const [suma, setSuma] = useState(sumaglobal)

  const handleClickSuma = () => {
    setSuma(suma + 1)
  }

  const handleClickSumaResta = () => {
    setSuma(suma - 1)
  }

  return (
    <div className="App">
      <SumaContext.Provider value={suma}>
        <button onClick={handleClickSuma}>Sumar</button>
        <button onClick={handleClickSumaResta}>Resta</button>
        <Tablas />
        <Graficas />
      </SumaContext.Provider>
    </div>
  );
}

export default App;
