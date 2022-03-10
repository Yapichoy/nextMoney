import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AccountType, CategoryType,} from "../utils/types";
import {AccountApi, CategoryApi} from "../../api";

const initialState: AccountType= {
    bill: 0,
    id: 1
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
    },
    extraReducers: builder => {
        builder
            .addCase(fetchAccount.fulfilled.type, (state, action: PayloadAction<AccountType>) => {
                state.id = action.payload.id;
                state.bill = action.payload.bill;
            })
            .addCase(decrementBill.fulfilled.type, (state, action: PayloadAction<number>) => {
                state.bill = action.payload;
            })
    }
})

export const fetchAccount = createAsyncThunk<AccountType>(
    'account/fetch',
    async () => {
        try {
            const account = await AccountApi.get();
            return account;
        } catch (error) {
            throw Error('Ошибка');
        }
    },
);

export const decrementBill = createAsyncThunk<number>(
    'account/decrement',
    async (value: number) => {
        try {
            const bill = await AccountApi.decrement(value);
            return bill;
        } catch (error) {
            throw Error('Ошибка');
        }
    },
);

export const {increment , decrement } = billSlice.actions;

export const billReducer = billSlice.reducer;
