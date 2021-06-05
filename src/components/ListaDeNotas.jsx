import React, { Component } from 'react';
import { CardNota } from './CardNota/CardNota';

export class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        { Array.of('Trabalho', 'Trabalho', 'Estudos').map((categoria, i) => {
          return (
            <li key={i}>
              <div>{categoria}</div>
              <CardNota />
            </li>
          );
        })}
      </ul>
    )
  }
}