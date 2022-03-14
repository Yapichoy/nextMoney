import { configureStore, Store, combineReducers } from '@reduxjs/toolkit';
import { billReducer } from './slices/billSlice';
import { categoriesReducer } from './slices/categoriesSlice';
import {createWrapper} from "next-redux-wrapper";
import {periodReducer} from "./slices/periodSlice";

const rootReducer = combineReducers({
    bill: billReducer,
    categories: categoriesReducer,
    period: periodReducer
})

export const makeStore = (): Store => 
    configureStore({
        reducer: rootReducer
    })

export const wrapper = createWrapper(makeStore, { debug: true });