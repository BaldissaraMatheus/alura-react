import React, { Component } from "react";

export class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.texto = "";
  }

  _handleMudancaTitulo(event) {
    event.preventDefault();
    this.title = event.target.value;
  }

  _handleMudancaTexto(event) {
    event.preventDefault();
    this.texto = event.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    this.props.criarNota(this.title, this.texto);
  }

  render() {
    return (
      <form onSubmit={this._criarNota.bind(this)}>
        <input type="text" placeholder="Título" onChange={this._handleMudancaTitulo.bind(this)} />
        <textarea placeholder="Escreva sua nota" onChange={this._handleMudancaTexto.bind(this)} />
        <button>Criar nota</button>
      </form>
    )
  }
}