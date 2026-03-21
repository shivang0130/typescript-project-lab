function wrap<T>(data: T): T {
  return data
}

console.log(wrap<string>("Hello"))
console.log(wrap<number>(100))