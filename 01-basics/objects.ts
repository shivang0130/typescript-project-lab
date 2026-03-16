// Object typing example

type User = {
  name: string
  age: number
  isAdmin: boolean
}

const user: User = {
  name: "Shivang",
  age: 20,
  isAdmin: true
}

console.log(user)

// Function returning object

function createUser(name: string, age: number, isAdmin: boolean): User {
  return {
    name,
    age,
    isAdmin
  }
}

console.log(createUser("Rahul", 25, false))