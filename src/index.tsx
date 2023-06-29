import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App/App";
import { Provider } from "react-redux";
import { setupStore } from "./store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const store = setupStore();
const persister = persistStore(store);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate persistor={persister}>
      <App />
    </PersistGate>
  </Provider>
);
