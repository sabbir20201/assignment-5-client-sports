/* eslint-disable @typescript-eslint/no-unused-vars */
import { configureStore } from '@reduxjs/toolkit'
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
// import storage from 'redux-persist/lib/storage'
import { baseApi } from './api/baseApi'
import registerReducer from './feature/registerSlice'
import loginReducer from './feature/LoignSlice'
import userReducer from './feature/UserSlice'
import bookingReducer from './feature/BookingPayloadSlice'
import storage from 'redux-persist/lib/storage';

const persistUserConfig = {
    key: 'user',
    storage,
}
const persistedUserReducer = persistReducer(persistUserConfig, userReducer)

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        register: registerReducer,
        login: loginReducer,
        user: persistedUserReducer,
        booking: bookingReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(baseApi.middleware)

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch



