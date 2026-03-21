type ApiResponse<T> = {
  success: boolean
  data: T
  error?: string
}

type Users = {
  id: string
  name: string
}

const response: ApiResponse<Users> = {
  success: true,
  data: {
    id: "u1",
    name: "Shivang"
  }
}

console.log(response)