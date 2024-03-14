export type ProductsList = Product[]

export interface Product {
    id: number
    title: string
    price: number
    category: string
    gender: string
    size: string
    stock: number
    img: string
    description: string
    status: string
}
