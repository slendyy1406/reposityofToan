
import { Product } from "./product.interface"
import { CurrentUser } from "./user.interface"

export interface purchases{
    id?:string
    user: CurrentUser
    products: Product[]
    total : number
}