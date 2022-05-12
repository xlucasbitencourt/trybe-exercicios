import React, { Component } from "react";

class Comparecer extends Component {
  render() {
    const { value, mudaForm } = this.props;

    return (
      <label>
        Vai comparecer?
        <input type='checkbox' name='vaiComparecer' value={value} onChange={mudaForm} />
      </label>
    );
  }
}

export default Comparecer;
