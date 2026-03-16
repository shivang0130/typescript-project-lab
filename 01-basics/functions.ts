// Basic typed function

function greet(name: string): string {
  return `Hello ${name}`
}

console.log(greet("Shivang"))

// Function with multiple parameters

function add(a: number, b: number): number {
  return a + b
}

console.log(add(5, 10))

// Discount example

function calculateDiscount(price: number, discount: number): number {
  return price - price * discount
}

console.log(calculateDiscount(1000, 0.1))