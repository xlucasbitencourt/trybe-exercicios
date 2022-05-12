import React, { Component } from 'react';

class Cargo extends Component {

  render() { 
    const { value, mudaDados, required } = this.props;

    return (
      <label className='emprego'>
        <span>Cargo</span>
        <textarea 
          name="cargo"
          value={value}
          onChange={mudaDados}
          required={required}
          maxLength='40'
        />
      </label>
    );
  }
}
 
export default Cargo;
