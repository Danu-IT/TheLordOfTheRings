import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";

export const logger =
  (store: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
    console.log("dispatch", action);
    console.log("before", store.getState());
    let res = next(action);
    console.log("after", store.getState());
    return res;
  };
