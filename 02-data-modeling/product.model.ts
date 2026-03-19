// Product model

export type Product = {
  id: string
  name: string
  price: number
  inStock: boolean
}

// example data

const products: Product[] = [
  { id: "p1", name: "Laptop", price: 80000, inStock: true },
  { id: "p2", name: "Phone", price: 40000, inStock: false }
]

console.log(products)