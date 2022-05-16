import React from "react";

class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    };
  }

  fetchJoke = async() => {
    this.setState({ loading: true }, async () => { // importante
      const requestHeaders = { headers: { Accept: "application/json" } };
      const requestReturn = await fetch("https://icanhazdadjoke.com/", requestHeaders);
      const requestObject = await requestReturn.json();
      this.setState({
        loading: false,
        jokeObj: requestObject,
      });
    });
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    this.setState(({ storedJokes, jokeObj }) => ({
      storedJokes: [...storedJokes, jokeObj],
    }));
    this.fetchJoke();
    //Esse método será responsável por salvar a piada no array de piadas storedJokes!!
  }

  render() {
    const { storedJokes, jokeObj, loading } = this.state;
    const loadingElement = <span>Carregando</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (
            <p key={id}>{joke}</p>
          ))}
        </span>

        {
          /*
        Aqui vamos construir nossa lógica com uma renderização condicional
        do nosso componente Joke, a ideia é renderizar um loading enquanto
        esperamos a nossa requisição de piadas finalizar.

        <p>RENDERIZAÇÃO CONDICIONAL</p>
        */
          <div>
            <p>{loading ? loadingElement : jokeObj.joke }</p>
            <button onClick={this.saveJoke}>Salvar</button>
          </div>
        }
      </div>
    );
  }
}

export default DadJoke;
