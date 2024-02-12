import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import session from 'redux-persist/lib/storage/session';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';
import { settingsSlice } from '@/layouts/settingsSlice';
import { dataSlice } from '@/layouts/dataSlice';

const persistConfig = {
   key: 'root',
   storage: session,
};

const persistConfigLocal = {
   key: 'local',
   storage: storage,
};

const reducers = combineReducers({
   data: dataSlice.reducer,
   settings: persistReducer(persistConfigLocal, settingsSlice.reducer),
});

const store = configureStore({
   reducer: persistReducer(persistConfig, reducers),
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof reducers>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const persistor = persistStore(store, null);

export { store, persistor };
