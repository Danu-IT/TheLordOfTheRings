import { onAuthStateChanged } from "firebase/auth";
import Header from "../components/Header/Header";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import Home from "../pages/General/Home";
import { privateRoutes, publicRoutes } from "../routes";

import { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { changeUser, userLoggedOut } from "../store/slices/auth";
import { auth } from "../firebase";
import { getAllCardItems, saveItem } from "../firebase/change";
import { changeFavorite } from "../store/slices/speciesSlice";
import { AppProvider } from "../context";

const App = () => {
  const [regularСardType, setRegularСardType] = useState(true);

  const { isAuth, user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const { favorites } = useAppSelector((state) => state.speciesSlice);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) dispatch(changeUser(user));
      else dispatch(userLoggedOut());
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    user.uid &&
      getAllCardItems("favorites", user.uid).then((favorite) => {
        favorite && dispatch(changeFavorite(favorite.docs || []));
      });
  }, [user]);

  useEffect(() => {
    if (isAuth && favorites.length && user.uid) {
      saveItem(favorites, user.uid, "favorites");
    }
  }, [favorites]);

  return (
    <AppProvider
      value={{
        regularСardType: regularСardType,
        setRegularСardType: setRegularСardType,
      }}>
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
    </AppProvider>
  );
};

export default App;
