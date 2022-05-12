import React, { Component } from "react";

class Nome extends Component {
  render() {
    const { value, mudaDados, required } = this.props;
    return (
      <label>
        <span>Nome:</span>
        <input
          type='text'
          name='nome'
          value={value.toUpperCase()}
          onChange={mudaDados}
          required={required}
          maxLength='40'
        />
      </label>
    );
  }
}

export default Nome;
