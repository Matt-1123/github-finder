import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  // create initial state for alert and set to null
  const initialState = null;

  // call an action, and then dispatch a type back to reducer
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set alert (action)
  const setAlert = (message, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { message, type },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  // return the Provider, which will be wrapped around the entire application. Pass in value, which contains anything we want available to the entire app.
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
