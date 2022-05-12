import React, { Component } from 'react';
import DadosPessoais from './DadosPessoais';
import Emprego from './Emprego';

class Form extends Component {
  state = {  } 
  render() { 
     return (
       <form>
         <DadosPessoais />
         <Emprego />
         <input type='submit' />
       </form>
     );
  }
}
 
export default Form;