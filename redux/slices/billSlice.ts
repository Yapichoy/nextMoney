import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BillType } from "../utils/types";

const initialState: BillType= {
    bill: 10000
}
const billSlice = createSlice({
    name: 'bill',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state.bill += action.payload;
        },
        decrement: (state, action: PayloadAction<number>) => {
            state.bill -= action.payload;
        }
        
    }
})

export const {increment , decrement } = billSlice.actions;

export const billReducer = billSlice.reducer;
