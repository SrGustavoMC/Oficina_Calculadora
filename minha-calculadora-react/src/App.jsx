import { useState } from 'react';
import './index.css'; // Importa o seu CSS

function App() {
  const [display, setDisplay] = useState('');
  const [memory, setMemory] = useState('');

  const handleAppend = (value) => {
    if (display === 'Erro') {
      setDisplay(value);
    } else {
      setDisplay(prevDisplay => prevDisplay + value);
    }
  };

  const handleClear = () => {
    setDisplay('');
  };

  const handleMemory = () => {
    if (memory) {
      setDisplay(prevDisplay => prevDisplay + memory);
    }
  };

  const handleCalculate = () => {
    if (display) {
      try {
        const expression = display.replace(/\^/g, '**');
        const result = eval(expression);
        setDisplay(String(result));
        setMemory(String(result));
      } catch (error) {
        setDisplay('Erro');
      }
    }
  };

  return (
    <>
      <header>
        <h1 className="Texto">Calculadora Automática</h1>
        <h2 className="Texto">Ao colocar os numeros e operadores ela calcula automaticamente</h2>
      </header>
      
      <main>
        <div className="visor">
          <input type="text" id="resultado" className="Texto" value={display} readOnly />
        </div>

        <div className="botoes">
          <input type="button" value="(" onClick={() => handleAppend('(')} />
          <input type="button" value=")" onClick={() => handleAppend(')')} />
          <input type="button" value="^" onClick={() => handleAppend('^')} />
          <input type="button" value="C" onClick={handleClear} />
          <input type="button" value="+" onClick={() => handleAppend('+')} />
          <br />
          <input type="button" value="1" onClick={() => handleAppend('1')} />
          <input type="button" value="2" onClick={() => handleAppend('2')} />
          <input type="button" value="3" onClick={() => handleAppend('3')} />
          <input type="button" value="-" onClick={() => handleAppend('-')} />
          <br />
          <input type="button" value="4" onClick={() => handleAppend('4')} />
          <input type="button" value="5" onClick={() => handleAppend('5')} />
          <input type="button" value="6" onClick={() => handleAppend('6')} />
          <input type="button" value="*" onClick={() => handleAppend('*')} />
          <br />
          <input type="button" value="7" onClick={() => handleAppend('7')} />
          <input type="button" value="8" onClick={() => handleAppend('8')} />
          <input type="button" value="9" onClick={() => handleAppend('9')} />
          <input type="button" value="/" onClick={() => handleAppend('/')} />
          <br />
          <input type="button" value="." onClick={() => handleAppend('.')} />
          <input type="button" value="%" onClick={() => handleAppend('%')} />
          <input type="button" value="M" onClick={handleMemory} />
          <input type="button" value="=" onClick={handleCalculate} />
        </div>
      </main>
    </>
  );
}

export default App;