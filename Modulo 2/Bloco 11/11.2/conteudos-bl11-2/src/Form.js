import React, { Component } from "react";
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
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className='form'>
          <fieldset>
            <legend>Título</legend>
            <label>
              Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
              <textarea
                name='estadoFavorito'
                value={this.state.estadoFavorito}
                onChange={this.mudaForm}
              />
            </label>
          </fieldset>
          <br />
          <label>
            Qual sua idade?
            <input
              type='number'
              name='idade'
              value={this.state.idade}
              onChange={this.mudaForm}
            />
          </label>
          <br />
          <label>
            Vai comparecer?
            <input
              type='checkbox'
              name='vaiComparecer'
              value={this.state.vaiComparecer}
              onChange={this.mudaForm}
            />
          </label>
          <br />
          <label>
            Insira seu arquivo
            <input 
              type='file'
              name="arquivo"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
