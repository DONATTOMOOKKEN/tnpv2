import { createStore, applyMiddleware } from 'redux';
import thunk  from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
/**
 * Redux-persisting
 */
// import storage from 'redux-persist/lib/storage';
// import { persistStore, persistReducer } from 'redux-persist'

// const persistConfig = {
//   key: 'tnp_state',
//   storage,
//   stateReconciler:autoMergeLevel2
// }
// const persistedReducer = persistReducer(persistConfig, rootReducer)

const loggerMiddleware = createLogger();

    // persistedReducer,
export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunk,
        loggerMiddleware
    ),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// export const persistor = persistStore(store)