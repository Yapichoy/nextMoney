import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryType } from "../utils/types";

const initialState: CategoryType[] = [
    {
        id: 1,
        categoryName: "Семья",
        bgColor: "#07c312",
        icon: "faUsers",
        sum: 1000
    },
    {
        id: 2,
        categoryName: "Кафе",
        bgColor: "#3023b9c0",
        icon: "faUtensils",
        sum: 400
    },
    {
        id: 3,
        categoryName: "Досуг",
        bgColor: "#ff0494c0",
        icon: "faFilm",
        sum: 0
    },
    {
        id: 4,
        categoryName: "Продукты",
        bgColor: "#8a23b9c0",
        icon: "faShoppingBasket",
        sum: 300
    },
    {
        id: 5,
        categoryName: "Транспорт",
        bgColor: "#dc9a13c0",
        icon: "faBusAlt",
        sum: 100
    },
    {
        id: 6,
        categoryName: "Здоровье",
        bgColor: "#0d9027",
        icon: "faHeartbeat",
        sum: 800
    },
    {
        id: 7,
        categoryName: "Покупки",
        bgColor: "#0d6e90",
        icon: "faShoppingBag",
        sum: 0
    },
    {
        id: 8,
        categoryName: "Подарки",
        bgColor: "#e22b38",
        icon: "faGift",
        sum: 0
    }
]
const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addNewCategory: (state, action: PayloadAction<CategoryType | undefined>) => {
            state.push({
                id: 9,
                categoryName: "Кафе",
                bgColor: "#3023b9c0",
                icon: "faUtensils",
                sum: 400
            })
        },
        createPurchase: (state, action: PayloadAction<CategoryType>) => {
            const index = state.findIndex((c: CategoryType) => c.id == action.payload.id);

            state[index].sum += action.payload.sum
        }
    }
})

export const { addNewCategory, createPurchase } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
