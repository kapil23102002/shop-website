import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
// import persistStore from "redux-persist/es/persistStore";
// import { PersistGate } from "redux-persist/integration/react";
// const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <PersistGate persistor={persistor}> */}
    <App />
    {/* </PersistGate> */}
  </Provider>
);
