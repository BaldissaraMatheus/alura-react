import './App.css';
import { ListaDeNotas } from './components/ListaDeNotas';
import { FormularioCadastro } from './components/Cadastro';
import React from 'react';

function App() {
  return (
    <section>
      <FormularioCadastro />
      <ListaDeNotas />
    </section>
  );
}

export default App;
