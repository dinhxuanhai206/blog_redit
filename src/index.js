import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/Store";
import { Provider } from "react-redux";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles>
        <App />
      </GlobalStyles>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
