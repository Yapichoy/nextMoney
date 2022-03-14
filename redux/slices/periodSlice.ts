import { createSlice, PayloadAction} from "@reduxjs/toolkit";

const now = new Date();
const initialState: any= {
    start: new Date(now.getFullYear(), now.getMonth(), 1).toString(),
    finish: new Date(now.getFullYear(), now.getMonth() + 1, 0).toString()
}
const periodSlice = createSlice({
    name: 'period',
    initialState,
    reducers: {
        setPeriod: (state, action: PayloadAction<Date>) => {
            const date = action.payload;
            state.start = new Date(date.getFullYear(), date.getMonth(), 1).toString();
            state.finish = new Date(date.getFullYear(), date.getMonth() + 1, 0).toString();
            console.log(state.start);
        },
    },
})


export const { setPeriod } = periodSlice.actions;

export const periodReducer = periodSlice.reducer;
