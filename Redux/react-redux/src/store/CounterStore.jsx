import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privacyToggle: false,
  // meg: "THIS COUNTER IS PRIVATE",
};
const reducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    newStore = { counter: store.counter - 1 };
  } else if (action.type === "ADD") {
    newStore = { counter: store.counter + Number6 + action.payload.num };
  } else if (action.type === "SUBTRACT") {
    newStore = { counter: store.counter - action.payload.num };
  } else if (action.type === "MULTIPLY") {
    newStore = { counter: store.counter * action.payload.num };
  } else if (action.type === "DIVIDE") {
    try {
      newStore = { counter: store.counter / action.payload.num };
    } catch (err) {
      newStore = 0;
      console.log("err : ", err);
    }
  } else if (action.type === "TOGGLEPRIVACY") {
    return { ...store, privacyToggle: !store.privacyToggle };
  }
  return newStore;
};

const counterStore = createStore(reducer);

export default counterStore;
// counterStore.subscribe();
