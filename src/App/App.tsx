import { onAuthStateChanged } from "firebase/auth";
import Header from "../components/Header/Header";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import Home from "../pages/General/Home";
import { privateRoutes, publicRoutes } from "../routes";

import { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { changeUser, userLoggedOut } from "../store/slices/auth";
import { auth } from "../firebase";
import { getAllCardItems } from "../firebase/change";
import { changeFavorite } from "../store/slices/speciesSlice";

const App = () => {
  const { isAuth, user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) dispatch(changeUser(user));
      else dispatch(userLoggedOut());
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    user.uid &&
      getAllCardItems("favorites", user.uid).then((favorite: any) => {
        dispatch(changeFavorite(favorite.docs || []));
      });
  }, [user]);

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

export default App;
