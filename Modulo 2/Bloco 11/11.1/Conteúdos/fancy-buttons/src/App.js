import React from 'react';

const ola = () => console.log('inicio'); // não usar desta forma

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
    // this.state = {
    //   cliques: 0
    // }
    this.extra = this.extra.bind(this);
  }

  state = {
    cliques: 0
  }

  extra() {
    console.log('extra');
    console.log(this);
  }

  conta = () => { // com arrow function, não precisa do bind
    this.setState((nomeQualquer, _props) => ({
      cliques: nomeQualquer.cliques + 1
      
    }))
    console.log(this.state.cliques);
    console.log(this.cor());
  }

  cor = () => {
    if (this.state.cliques % 2 === 0) {
      return 'green'
    }
    return 'white'
  }

  render() { 
    // console.log(this);
    return (
      <>
    <button onClick={ola}>errado</button>
    <button onClick={this.extra}>exibe this</button>
    <button onClick={this.conta} style={{backgroundColor: this.cor()}}>{this.state.cliques}</button>
    </>
    );
  }
}
 
export default App;
