import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: "",
      loading: false,
      jokes: [],
    };
  }

  componentDidMount() {
    this.setState({
      jokes: JSON.parse(localStorage.getItem("jokes"))
        ? [...JSON.parse(localStorage.getItem("jokes"))]
        : [],
    });
    this.fetchJoke();
    // const API_URL = 'https://icanhazdadjoke.com/';
    // fetch(API_URL, { headers: { Accept: 'application/json' } })
    //   .then((response) => response.json())
    //   .then((data) => this.setState({ joke: data.joke }));
  }

  fetchJoke = async () => {
    this.setState({ loading: true });
    const API_URL = "https://icanhazdadjoke.com/";
    const fetchJoke = await fetch(API_URL, { headers: { Accept: "application/json" } });
    const { joke } = await fetchJoke.json();
    // console.log(joke);
    this.setState({ joke, loading: false });
  };

  saveJoke = () => {
    const { joke, jokes } = this.state;
    this.setState(
      {
        jokes: [...jokes, joke],
      },
      this.saveLocal(),
    );
    console.log(jokes);
  };

  saveLocal = () => {
    const { jokes } = this.state;
    console.log(jokes);
    localStorage.setItem("jokes", JSON.stringify(jokes));
  }

  render() {
    const { joke, jokes, loading } = this.state;
    const load = <p>Loading...</p>;

    return (
      <div className="App">
        {loading ? (
          load
        ) : (
          <div>
            <p>{joke}</p>
            <button onClick={this.fetchJoke}>New</button>
          </div>
        )}
        <button onClick={this.saveJoke}>Save</button>
        {jokes.map((joke) => (
          <p key={Math.random()}>{joke}</p>
        ))}
      </div>
    );
  }
}

export default App;
