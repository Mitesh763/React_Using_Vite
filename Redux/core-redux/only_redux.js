const redux = require("redux");

// create reducer function
const reducerFunction = (state = { votes: 0 }, action) => {
  let newStore = state;
  if (action.type === "Increment") {
    newStore = { votes: state.votes + 1 };
  } else if (action.type === "Decrement") {
    newStore = { votes: state.votes - 1 };
  } else if (action.type === "ADDITION") {
    newStore = { votes: state.votes + action.payload.number };
  }
  return newStore;
};

// create store;
const store = redux.createStore(reducerFunction);

// subscriber function
const subscriberFunction = () => {
  const state = store.getState();
  console.log(state);
};

// create subscribe to store
store.subscribe(subscriberFunction);
store.dispatch({ type: "Increment" });
store.dispatch({ type: "Increment" });
store.dispatch({ type: "Increment" });
store.dispatch({ type: "Increment" });
store.dispatch({ type: "Decrement" });
store.dispatch({ type: "ADDITION", payload: { number: 7 } });
