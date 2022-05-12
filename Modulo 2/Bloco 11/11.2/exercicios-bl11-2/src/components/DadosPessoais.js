import React, { Component } from "react";
import Cidade from "./Cidade";
import CPF from "./CPF";
import Email from "./Email";
import Endereco from "./Endereco";
import Estado from "./Estado";
import Nome from "./Nome";
import TipoCasa from "./TipoCasa";

class DadosPessoais extends Component {
  state = {
    nome: "",
    email: "",
    cpf: "",
    endereco: "",
    cidade: "",
    estado: "",
    tipo: "",
  };

  mudaDados = ({ target }) => {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    console.log(target);
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { nome, email, cpf, endereco, cidade, estado, tipo } = this.state;

    return (
      <fieldset>
        <legend>Dados pessoais</legend>
        <Nome value={nome} mudaDados={this.mudaDados} required={true} />
        <Email value={email} mudaDados={this.mudaDados} required={true} />
        <CPF value={cpf} mudaDados={this.mudaDados} required={true} />
        <Endereco value={endereco} mudaDados={this.mudaDados} required={true}  />
        <Cidade value={cidade} mudaDados={this.mudaDados} required={true} />
        <Estado value={estado} mudaDados={this.mudaDados} required={true} />
        <TipoCasa value={tipo} mudaDados={this.mudaDados} required={true} />
      </fieldset>
    );
  }
}

export default DadosPessoais;
