export type BillType = {
    bill: number
}

export type CategoryType = {
    id: number,
    categoryName: string,
    color: string,
    logo: any,
    sum: number,
    refreshData?: any
}

export type PieChartType = {
    width: number,
    height: number,
    data: CategoryType[],
    fontSize: number
}

export type OperationType = {
    categoryId: number,
    sum: number
}