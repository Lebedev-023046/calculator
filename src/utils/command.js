class Calculator {
  constructor() {
    this.value = 0
    this.operations_history = []
  }

  executeOperation(command) {
    this.value = command.execute(this.value)
    this.operations_history.push(command)
  }
}

class AddOperation {
  constructor(addedValue) {
    this.addedValue = addedValue
  }

  execute(currentValue) {
    return currentValue + this.addedValue
  }
}

const calculator = new Calculator()
