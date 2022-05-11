import React, { Component } from "react";

class Idade extends Component {
  render() {
    const { mudaForm, value } = this.props;
    let idadeErrada = '';
    value > 100 ? idadeErrada = 'Olouco mano' : idadeErrada = '';

    return (
      <label>
        Qual sua idade?
        <input type='number' name='idade' value={value} onChange={mudaForm} />
        <span>{idadeErrada}</span>
      </label>
    );
  }
}

export default Idade;
