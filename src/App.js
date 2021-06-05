import './assets/App.css';
import { ListaDeNotas } from './components/ListaDeNotas';
import { FormularioCadastro } from './components/Cadastro';
import React, { Component } from 'react';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      notas: []
    };
  }

  criarNota(titulo, texto) {
    const nota = { titulo, texto };
    const notas = [ ...this.state.notas, nota ];
    this.setState({ notas });
  }

  render() {
    return (
      <section>
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
