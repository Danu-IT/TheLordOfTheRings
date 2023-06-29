import Header from "../components/Header/Header";
import { useAppSelector } from "../hooks/redux";
import Home from "../pages/General/Home";
import { privateRoutes, publicRoutes } from "../routes";

import { Fragment, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const isAuth = useAppSelector((state) => state.authSlice.isAuth);
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          {isAuth
            ? privateRoutes.map((route) => (
                <Fragment key={route.path}>
                  <Route
                    path={route.path}
                    element={<route.component></route.component>}
                  />
                </Fragment>
              ))
            : publicRoutes.map((route) => (
                <Fragment key={route.path}>
                  <Route
                    path={route.path}
                    element={<route.component></route.component>}
                  />
                </Fragment>
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
