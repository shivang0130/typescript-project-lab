// User domain model

export type UserRole = "admin" | "user" | "guest"

export type User = {
  id: string
  name: string
  email: string
  role: UserRole
  isActive: boolean
  createdAt: Date
}

// example usage

const user: User = {
  id: "u1",
  name: "Shivang",
  email: "shivang@email.com",
  role: "admin",
  isActive: true,
  createdAt: new Date()
}

console.log(user)