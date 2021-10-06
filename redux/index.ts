import { configureStore, Store, combineReducers } from '@reduxjs/toolkit';
import { billReducer } from './slices/billSlice';
import { categoriesReducer } from './slices/categoriesSlice';

const rootReducer = combineReducers({
    bill: billReducer,
    categories: categoriesReducer
})

export const makeStore = (): Store => 
    configureStore({
        reducer: rootReducer
    })