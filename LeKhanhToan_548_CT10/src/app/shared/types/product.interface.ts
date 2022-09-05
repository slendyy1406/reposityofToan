export interface Product{
    id?:string
    name: string
    type: string
    price: number
    description: string
    image: string
    quantity: number | 1
}
export type SortType = 'id' | 'name' | 'type' | 'price'