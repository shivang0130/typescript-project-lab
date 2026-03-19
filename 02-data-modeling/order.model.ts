// Order model

import { Product } from "./product.model"

export type OrderStatus = "pending" | "paid" | "shipped"

export type Order = {
  id: string
  product: Product
  quantity: number
  totalAmount: number
  status: OrderStatus
}

// example order

const order: Order = {
  id: "o1",
  product: {
    id: "p1",
    name: "Laptop",
    price: 80000,
    inStock: true
  },
  quantity: 1,
  totalAmount: 80000,
  status: "pending"
}

console.log(order)