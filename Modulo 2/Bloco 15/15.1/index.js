console.log(document.getElementById("inc"));

// ====== Definir Reducer e Estado Inicial ==========
const initialState = {
  count: 0,
};
const reducer = (state = initialState, action) => {
  if (action.type === "aumenta") {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  if (action.type === "diminui") {
    return {
      ...state,
      count: state.count - 1,
    };
  }

  return state;
};

// ====== Criar a Store ==========
const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // para a extensão funcionar
);

// ====== Lendo e reagindo a mudanças do Estado Global ==========
// Descomente abaixo:

store.subscribe(() => {
  //   // Leia a variável do estado global
  // const count = store.getState().count;
  const ele = store.getState();

  //   // atualizar
  const h1Element = document.getElementById("counter");
  h1Element.innerText = ele.count;
});

// ========== Disparar as Actions ==========
const incrementButton = document.getElementById("inc");
const decrementButton = document.getElementById("dec");

incrementButton.addEventListener("click", () => {
  // dispare sua action aqui.
  store.dispatch({ type: "aumenta" });
});
decrementButton.addEventListener("click", () => {
  // dispare sua action aqui.
  store.dispatch({ type: "diminui" });
});
