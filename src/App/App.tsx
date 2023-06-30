import Header from "../components/Header/Header";
import { useAppSelector } from "../hooks/redux";
import Home from "../pages/General/Home";
import { privateRoutes, publicRoutes } from "../routes";

import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          {isAuth
            ? privateRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component></route.component>}
                />
              ))
            : publicRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component></route.component>}
                />
              ))}
          <Route
            path="*"
            element={<Home />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
