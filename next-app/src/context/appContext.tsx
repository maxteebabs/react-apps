'use client';
import { Post } from "@/Models/Post";
import React, {ReactNode, createContext, useEffect, useReducer} from "react";

const SAVE_POSTS = 'SAVE_POSTS';

interface MyProp {
  children: ReactNode,
  data: Array<posts>
}

interface MyPayload {
  posts: Post[];
}

interface Action {
  payload: any;
  type: string;
}

interface AppState {
  posts: Array<Post>
}

const initialState: AppState = {
  posts: []
};

interface Context {
  state: AppState,
  dispatch: Function
}

export const AppContext = createContext({} as Context);

const appReducer = (state: AppState, action: Action) => {
  switch(action.type) {
    case SAVE_POSTS:
      return {...state, posts: action.payload };
    default:
      return state;
  }
}

export const AppProvider = (props: MyProp) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  useEffect(() => {
    dispatch({type: SAVE_POSTS, payload: props.data});
  }, [initialState.posts]);
  return (
  <AppContext.Provider value={{state, dispatch}}>
    {props.children}
  </AppContext.Provider>
  );
}
