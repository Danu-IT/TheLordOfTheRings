import ReactDOM from "react-dom/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import "./styles/index.css";
import App from "./App/App";
import { setupStore } from "./store";
import ErrorBoundary from "./components/ErrorBoundary";

const store = setupStore();
const persister = persistStore(store);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <App />
      </PersistGate>
    </Provider>
    <ToastContainer />
  </ErrorBoundary>
);
