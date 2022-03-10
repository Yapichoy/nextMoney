import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CategoryType, OperationType} from "../utils/types";
import {CategoryApi, OperationApi} from "../../api";

const initialState: CategoryType[] = [

]
const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
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
    async ({categoryId, sum, operationDate}: OperationType) => {
        try {
            await OperationApi.add({categoryId, sum, operationDate});
        } catch (error) {
            throw Error('Ошибка');
        }
    },
);

export const addNewCategory = createAsyncThunk<void, CategoryType>(
    'category/add',
    async (category: CategoryType) => {
        try {
            await CategoryApi.add(category);
        } catch (error) {
            throw Error('Ошибка');
        }
    },
);

export const { } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
