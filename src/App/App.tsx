import { onAuthStateChanged } from "firebase/auth";
import { AnimatePresence } from "framer-motion";
import axios from "axios";

import { useAppDispatch } from "../hooks/redux";
import { useEffect, useState } from "react";
import { changeUser, userLoggedOut } from "../store/slices/auth";
import { auth } from "../firebase";
import { AppProvider } from "../context";
import Router from "../components/Router";

const App = () => {
  const [regularСardType, setRegularСardType] = useState(true);
  const [isFeatureFlag, setIsFeatureFlag] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) dispatch(changeUser(user));
      else dispatch(userLoggedOut());
    });
    return unsubscribe;
  }, []);

  const fetchTelegramFlag = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/feature-flags"
      );
      setIsFeatureFlag(response.data.isTelegramShareEnabled);
    } catch (e) {
      if (e) setIsFeatureFlag(false);
    }
  };

  useEffect(() => {
    fetchTelegramFlag();
  }, []);

  return (
    <AppProvider
      value={{
        isFeatureFlag: isFeatureFlag,
        regularСardType: regularСardType,
        setRegularСardType: setRegularСardType,
      }}>
      <AnimatePresence>
        <Router />
      </AnimatePresence>
    </AppProvider>
  );
};
export default App;
