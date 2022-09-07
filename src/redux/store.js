
import { configureStore , combineReducers} from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reducer';
import filterReducer from './filter/filter-reducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const rootReducer = combineReducers({
//   reducer,
// })


// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
  
// });

// export const persistor = persistStore(store);

const store = configureStore({
  reducer: {
   contacts: contactsReducer,
   filter: filterReducer,
  }
  
});

export default store;