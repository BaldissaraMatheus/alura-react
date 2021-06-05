import './assets/App.css';
import { ListaDeNotas } from './components/ListaDeNotas';
import { FormularioCadastro } from './components/Cadastro';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <section>
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
