import { Dispatch, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { getAllCardItems, saveItem } from "../../firebase/change";
import { changeFavorite } from "../slices/speciesSlice";

export const cooperationWithFirebase: Middleware =
  (store: MiddlewareAPI) => (next: Dispatch) => (action) => {
    if (action.type === "auth/changeUser") {
      getAllCardItems("favorites", action.payload.uid).then((favorite) => {
        favorite && store.dispatch(changeFavorite(favorite.docs || []));
      });
    }

    let res = next(action);

    if (action.type === "auth/toggleLike") {
      saveItem(
        store.getState().speciesSlice.favorites,
        store.getState().auth.user.uid,
        "favorites"
      );
    }
    if (
      action.type === "auth/removeItemHistory" ||
      action.type === "auth/clearAllHistory" ||
      action.type === "auth/addItemHistory"
    ) {
      saveItem(
        store.getState().speciesSlice.history,
        store.getState().auth.user.uid,
        "history"
      );
    }

    return res;
  };
