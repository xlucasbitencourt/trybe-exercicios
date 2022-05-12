import React, { Component } from "react";

class Curriculo extends Component {
  render() {
    const { value, mudaDados, required } = this.props;

    return (
      <label className='emprego'>
        <span>Resumo do currículo</span>
        <textarea
          name="curriculo"
          value={value}
          onChange={mudaDados}
          required={required}
          maxLength='1000'
        />
      </label>
    );
  }
}

export default Curriculo;
