import { useState } from "react";
import { createStore, applyMiddleware, compose } from "react"
import reducers from "./reducers/index"
import thunk from "redux-thunk"


const  [name, setName] = useState(0);
console.log(name);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default Store;
