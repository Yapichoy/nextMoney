export type BillType = {
    bill: number
}

export type CategoryType = {
    id: number,
    categoryName: string,
    bgColor: string,
    icon: any,
    sum: number
}

export type PieChartType = {
    width: number,
    height: number,
    data: CategoryType,
    fontSize: number
}