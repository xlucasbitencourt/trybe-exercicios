import React from 'react';
import './App.css';

const ola = () => console.log('inicio');
const meio = () => console.log('meio');
const fim = () => console.log('fim');

/* function App() {
  let a = 2;
  const extra = () => console.log(a);
  return (
    <>
    <button onClick={ola}>inicio</button>
    <button onClick={meio}>meio</button>
    <button onClick={fim}>fim</button>
    <button onClick={extra}>extra</button>
    </>
  );
} */

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cliques: 0
    }
    this.extra = this.extra.bind(this);
    this.conta = this.conta.bind(this);
  }

  extra() {
    console.log('extra');
    console.log(this);
  }

  conta() {
    this.setState((nomeQualquer, _props) => ({
      cliques: nomeQualquer.cliques + 1
    }))
  }

  render() { 
    console.log(this);
    return (
      <>
    <button onClick={ola}>inicio</button>
    <button onClick={meio}>meio</button>
    <button onClick={fim}>fim</button>
    <button onClick={this.extra}>extra</button>
    <button onClick={this.conta}>{this.state.cliques}</button>
    </>
    );
  }
}
 
export default App;
