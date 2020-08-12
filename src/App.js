import React from 'react';
import './App.css';
import Button from './component/Button.jsx';
import Redtext from './component/Redtext.jsx';
import InputComponent from './component/InputComponent.jsx';

function App() {
  return (
    <div className="App">
      hallo
      <Button text="Dicky">
      </Button>

      <Redtext>
        Halo saya merah
      </Redtext>

      <InputComponent/>

    </div>
  );
}

export default App;
