import React, { Component } from "react";

class Cidade extends Component {
  render() {
    const { value, mudaDados, required } = this.props;
    return (
      <label>
        <span>Cidade:</span>
        <input
          type='text'
          name='cidade'
          value={value}
          onChange={mudaDados}
          required={required}
          maxLength='28'
        />
      </label>
    );
  }
}

export default Cidade;
