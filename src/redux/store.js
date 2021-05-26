import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import phonebookReducer from './actions/phonebook-reducer';
import { 
    persistStore, 
    persistReducer, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import { combineReducers } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';

// const rootReducer = combineReducers({
//   contacts: phonebookReducer,
// })

//   const store = createStore(rootReducer, composeWithDevTools());

const middleware = [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }), logger];

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

// const rootReducer = combineReducers({
//   contacts: phonebookReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: {
        contacts: persistReducer(persistConfig, phonebookReducer)
    },
    middleware, 
    devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };