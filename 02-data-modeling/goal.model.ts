// Goal model

export type Priority = "low" | "medium" | "high"

export type Goal = {
  id: string
  title: string
  description: string
  completed: boolean
  priority: Priority
  createdAt: Date
}

const goal: Goal = {
  id: "g1",
  title: "Build SaaS product",
  description: "Develop a productive SaaS platform",
  completed: false,
  priority: "high",
  createdAt: new Date()
}

console.log(goal)