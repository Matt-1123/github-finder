import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

// create initial state for Github-related data
const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  // call an action, and then dispatch a type back to reducer
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUsers = async (text) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    // all actions end with a dispatch to the reducer with a type
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  // Get User
  const getUser = async (username) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  // Get Repos

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // return the Provider, which will be wrapped around the entire application. Pass in value, which contains anything we want available to the entire app.
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
