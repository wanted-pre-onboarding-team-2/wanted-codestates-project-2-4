import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App";
import GlobalStyle from "./GlobalStyle";
import rootReducer from "./modules";
import ReduxThunk from "redux-thunk";

const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(ReduxThunk))
    : composeWithDevTools(applyMiddleware(ReduxThunk));

const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root"),
);
