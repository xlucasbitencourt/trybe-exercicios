import React, { Component } from "react";

class CPF extends Component {
  render() {
    const { value, mudaDados, required } = this.props;
    return (
      <label>
        <span>CPF:</span>
        <input
          type='text'
          name='cpf'
          value={value}
          onChange={mudaDados}
          required={required}
          maxLength='11'
        />
      </label>
    );
  }
}

export default CPF;
