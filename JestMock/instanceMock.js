class ClassA {
  constructor(classB) {
    this.classB = classB;
  }
  func() {
    return this.classB.someFunc().toUpperCase();
  }
}

class ClassB {
  someFunc() {
    return "hello world.";
  }
} 

exports.ClassA = ClassA;
exports.ClassB = ClassB;