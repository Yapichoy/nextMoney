import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CategoryType, OperationType} from "../utils/types";
import {CategoryApi, OperationApi} from "../../api";

const initialState: any = {
    categories: []
}
const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(fetchCategories.fulfilled.type, (state, action: PayloadAction<CategoryType>) => {
            state.categories = action.payload;
        }).addCase(addNewOperation.fulfilled.type, (state, action: PayloadAction<CategoryType>) => {
            state.categories = action.payload;
        }).addCase(addNewCategory.fulfilled.type, (state, action: PayloadAction<CategoryType>) => {
            state.categories = action.payload;
        })
    }
})

export const fetchCategories = createAsyncThunk<CategoryType[]>(
    'category/fetch',
    async (period: any) => {
        try {
            const categories = await CategoryApi.getAllWithSum(period);
            return categories;
        } catch (error) {
            throw Error('Ошибка');
        }
    },
);

export const addNewOperation = createAsyncThunk<void, OperationType>(
    'operation/add',
    async ({categoryId, sum, operationDate, period}: OperationType) => {
        try {
            await OperationApi.add({categoryId, sum, operationDate});
            const categories = await CategoryApi.getAllWithSum(period);
            return categories;
        } catch (error) {
            throw Error('Ошибка');
        }
    },
);

export const addNewCategory = createAsyncThunk<void, CategoryType, any>(
    'category/add',
    async (category: CategoryType) => {
        try {
            await CategoryApi.add(category);
            const categories = await CategoryApi.getAllWithSum(category.period);
            return categories;
        } catch (error) {
            throw Error('Ошибка');
        }
    },
);

export const { } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
