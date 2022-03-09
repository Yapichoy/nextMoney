import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CategoryType, OperationType} from "../utils/types";
import {CategoryApi, OperationApi} from "../../api";

const initialState: CategoryType[] = [

]
const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addNewCategory: (state, action: PayloadAction<CategoryType | undefined>) => {
            // @ts-ignore
            state.push(action.payload)
        },
        createPurchase: (state, action: PayloadAction<CategoryType>) => {
            const index = state.findIndex((c: CategoryType) => c.id == action.payload.id);

            state[index].sum += action.payload.sum
        }
    },
    extraReducers: builder => {}
})

export const fetchCourses = createAsyncThunk<CategoryType[]>(
    'category/fetch',
    async () => {
        try {
            const categories = await CategoryApi.getAllWithSum();
            return categories;
        } catch (error) {
            throw Error('Ошибка');
        }
    },
);

export const addNewOperation = createAsyncThunk<void, OperationType>(
    'operation/add',
    async ({categoryId, sum}: OperationType) => {
        try {
            await OperationApi.add({categoryId, sum});
        } catch (error) {
            throw Error('Ошибка');
        }
    },
);

export const { addNewCategory, createPurchase } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
