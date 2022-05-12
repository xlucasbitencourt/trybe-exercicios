import React, { Component } from "react";
import Cargo from "./Cargo";
import Curriculo from "./Curriculo";
import Descricao from "./Descricao";

class Emprego extends Component {
  state = {
    curriculo: "",
    cargo: "",
    descricao: "",
  };

  mudaDados = ({ target }) => {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { curriculo, cargo, descricao } = this.state;

    return (
      <fieldset>
        <legend>Emprego</legend>
        <Curriculo value={curriculo} mudaDados={this.mudaDados} required={true} />
        <Cargo value={cargo} mudaDados={this.mudaDados} required={true} />
        <Descricao value={descricao} mudaDados={this.mudaDados} required={true} />
      </fieldset>
    );
  }
}

export default Emprego;
