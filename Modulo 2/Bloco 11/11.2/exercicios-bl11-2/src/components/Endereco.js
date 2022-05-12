import React, { Component } from "react";

class Endereco extends Component {
  render() {
    const { value, mudaDados, required } = this.props;

    return (
      <label>
        <span>Endereço:</span>
        <input
          type='text'
          name='endereco'
          value={value.replace(/[`~!@#$%^&  *()_|+\-=?;'".<>{}[\]\\/]/gi, '')}
          onChange={mudaDados}
          required={required}
          maxLength='200'
        />
      </label>
    );
  }
}

export default Endereco;
