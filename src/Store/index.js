// import AsyncStorage from '@react-native-community/async-storage'
// import { combineReducers } from 'redux'
// import {
//   persistReducer,
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'
// import { configureStore } from '@reduxjs/toolkit'
// import createDebugger from 'redux-flipper'

// import startup from './Startup'
// import user from './User'

// const reducers = combineReducers({
//   startup,
//   user,
// })

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: [],
// }

// const persistedReducer = persistReducer(persistConfig, reducers)

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(createDebugger()),
// })

// const persistor = persistStore(store)

// export { store, persistor }
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import commence from './reducers/auth';
import UI from './reducers/ui';
import Story from './reducers/story'

const rootReducer = combineReducers({
  auth: commence,
  ui: UI,
  story: Story
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['ui'],
};

const middleware = applyMiddleware(thunk);

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const STORE = createStore(
  persistedReducer,
  composeEnhancers(middleware),
);
export const PERSISTOR = persistStore(STORE);

