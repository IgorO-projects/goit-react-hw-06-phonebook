import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
// import { combineReducers } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
import phonebookReducer from './actions/phonebook-reducer';

// const rootReducer = combineReducers({
//   contacts: phonebookReducer,
// })

//   const store = createStore(rootReducer, composeWithDevTools());

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
    reducer: {
      contacts: phonebookReducer,
    },
    middleware, 
    devTools: process.env.NODE_ENV === 'development',
}) 

export default store; 