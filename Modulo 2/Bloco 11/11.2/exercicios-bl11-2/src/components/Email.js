import React, { Component } from "react";

class Email extends Component {
  render() {
    const { value, mudaDados, required } = this.props;

    return (
      <label>
        <span>E-mail:</span>
        <input
          type='email'
          name='email'
          value={value}
          onChange={mudaDados}
          required={required}
          maxLength='50'
        />
      </label>
    );
  }
}

export default Email;
