import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import loginModalSlice from './loginModalSlice';
// follow this
//https://blog.logrocket.com/persist-state-redux-persist-redux-toolkit-react/
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}
const rootReducer = combineReducers({
    cart: cartReducer,
    product: productReducer,
    loginmodal:loginModalSlice
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
    reducer: persistedReducer
});
export const persistor = persistStore(store);
export default store;
