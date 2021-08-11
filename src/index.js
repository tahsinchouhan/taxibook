import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Provider store={configureStore()}>
    <Suspense fallback={<div>Loading</div>}>
      <App />
    </Suspense>
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
