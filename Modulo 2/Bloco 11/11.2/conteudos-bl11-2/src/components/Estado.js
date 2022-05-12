import React, { Component } from "react";

class Estado extends Component {
  render() {
    const { value, mudaForm } = this.props;
    return (
      <label>
        Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
        <textarea name='estadoFavorito' value={value} onChange={mudaForm} />
      </label>
    );
  }
}

export default Estado;
