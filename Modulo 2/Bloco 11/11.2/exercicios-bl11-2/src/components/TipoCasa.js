import React, { Component } from "react";

class TipoCasa extends Component {
  render() {
    const { value, mudaDados, required } = this.props;
    return (
      <div>
        <span>Tipo:</span>
        <label>
          <span>Casa</span>
          <input
            type='radio'
            name='tipo'
            value='casa'
            checked={value === "casa"}
            onChange={mudaDados}
            required={required}
          />
        </label>
        <label>
          <span>Apartamento</span>
          <input
            type='radio'
            name='tipo'
            value='apartamento'
            checked={value === "apartamento"}
            onChange={mudaDados}
            required={required}
          />
        </label>
      </div>
    );
  }
}

export default TipoCasa;
