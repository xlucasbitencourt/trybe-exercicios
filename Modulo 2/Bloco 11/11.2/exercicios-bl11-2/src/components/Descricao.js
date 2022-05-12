import React, { Component } from 'react';

class Descricao extends Component {
  render() { 
    const { value, mudaDados, required } = this.props;

    return (
      <label className='emprego'>
        <span>Descrição do cargo</span>
        <textarea
          name="descricao"
          value={value}
          onChange={mudaDados}
          required={required}
          maxLength='500'
        />
      </label>
    );
  }
}
 
export default Descricao;
