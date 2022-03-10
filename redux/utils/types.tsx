export type CategoryType = {
    id?: number,
    categoryName: string,
    color: string,
    logo: any,
    sum?: number,
    refreshData?: any
}

export type PieChartType = {
    width: number,
    height: number,
    data: CategoryType[],
    fontSize: number
}

export type OperationType = {
    categoryId: number | undefined,
    sum: number,
    operationDate?: Date
}

export type AccountType = {
    id: number,
    bill: number
}