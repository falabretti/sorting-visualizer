import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { sort } from "./sort.reducer";

export const rootReducer = combineReducers({ sort });

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunkMiddleware)
));
