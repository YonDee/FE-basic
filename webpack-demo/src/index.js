const sum = (a, b) => {
  return a + b;
}

console.log(sum(10, 20))

class Student {
  constructor(name, number) {
    this.name = name
    this.number = number
  }
  sayHi() {
    console.log(
      `姓名 ${this.name}, 学号 ${this.number}`
    )
  }
}