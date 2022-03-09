import axios from 'axios';
import {OperationType} from "../redux/utils/types";

const instance = axios.create({
    baseURL: 'http://localhost:3001/',
})

export const CategoryApi = {
    async getAllWithSum() : Promise<any>{
        const { data } = await instance.get<any, {data: any}>('/category/getAllWithSum');
        return data;
    },
}

export const OperationApi = {
    async add(operation: OperationType): Promise<any> {
        await instance.post('/operation/add', operation);
        return true;
    }
}