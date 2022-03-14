import axios from 'axios';
import {AccountType, CategoryType, OperationType} from "../redux/utils/types";

const instance = axios.create({
    baseURL: 'http://localhost:3001/',
})

export const CategoryApi = {
    async getAllWithSum(period: any) : Promise<CategoryType[]>{
        const { data } = await instance.post<any, {data: CategoryType[]}>('/category/getAllWithSum', period);
        return data;
    },
    async add(category: CategoryType): Promise<CategoryType>{
        const { data } = await instance.post<any, {data: CategoryType}>('/category', category);
        console.log(data);
        return data;
    }
}

export const OperationApi = {
    async add(operation: OperationType): Promise<void> {
        await instance.post('/operation/add', operation);
    }
}

export const AccountApi = {
    async get(): Promise<AccountType> {
        const { data } = await instance.get<any, {data: AccountType}>('/account/get');
        return data;
    },
    async decrement(value: number): Promise<number> {
        const { data } = await instance.post<any, any>('/account/decrement', {value});
        return data;
    }

}