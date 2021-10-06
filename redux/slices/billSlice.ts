import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type BillSliceState = {
    bill: number
}
const initialState: BillSliceState = {
    bill: 10000
}
const billSlice = createSlice({
    name: 'bill',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state.bill += action.payload
        }
    }
})

export const { increment } = billSlice.actions;

export const billReducer = billSlice.reducer;
