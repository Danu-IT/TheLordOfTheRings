import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Header";
import { useAppSelector } from "../../hooks/redux";
import { privateRoutes, publicRoutes } from "../../routes";
import Home from "../../pages/General/Home";
import Loader from "../Loader/Loader";

const Router = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          {isAuth
            ? privateRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                />
              ))
            : publicRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
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

export default Router;
