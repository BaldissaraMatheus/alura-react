import React, { Component } from 'react';
import { CardNota } from './CardNota/CardNota';

export class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        { this.props.notas.map((nota, i) => {
          return (
            <li key={i}>
              <CardNota titulo={nota.titulo} texto={nota.texto} />
            </li>
          );
        })}
      </ul>
    )
  }
}