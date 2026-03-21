type AddFn = (a: number, b: number) => number

const addd: AddFn = (a, b) => a + b

console.log(addd(2, 3))