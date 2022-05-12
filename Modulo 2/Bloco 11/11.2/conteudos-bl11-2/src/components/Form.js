import React, { Component } from "react";
import Comparecer from "./Comparecer";
import Estado from "./Estado";
import Idade from "./Idade";
// import './Form.css'

class Form extends Component {
  /*constructor() {
    super();

    this.state = {
      estadoFavorito: "",
      vaiComparecer: false,
      idade: 0,
    };
  }*/

  state = {
    // declara o state fora do constructor desta forma
    estadoFavorito: "",
    vaiComparecer: false,
    idade: 0,
  };

  mudaForm = ({ target }) => {
    // não precisa declarar no constructor quando é arrow function
    const { name } = target; // desestruturação
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  botaoEnviar = (event) => {
    event.preventDefault();
    console.log(event.target);
    alert('olá');
  }

  render() {
    const { estadoFavorito, vaiComparecer, idade } = this.state; // desestruturação

    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className='form' onSubmit={this.botaoEnviar}>
          <fieldset>
            <legend>Título</legend>
            <Estado value={estadoFavorito} mudaForm={this.mudaForm} />
          </fieldset>
          <br />
          <Idade value={idade} mudaForm={this.mudaForm} />
          <br />
          <Comparecer value={vaiComparecer} mudaForm={this.mudaForm} />
          <br />
          <label>
            Insira seu arquivo
            <input type='file' name='arquivo' />
          </label>
          <button type="submit" >Clique aqui</button>
        </form>
      </div>
    );
  }
}

export default Form;
