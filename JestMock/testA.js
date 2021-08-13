var { CalcModuleA, TextModuleA } = require('./moduleA');

class TestClass {
    constructor(text /*TextModuleA*/) {
      this.text = text;
      this.calc = new CalcModuleA(1);
    }

    getText(textA, textB) {
      const s1 = textA.split('s');
      const s2 = textB.substr(-2);
      const c = this.calc.exec(textA.length, textB.length);
      const t = this.text.exec(s1[0], s2);
      return t + s1[s1.length -1] + c;
    }
}

exports.TestClass = TestClass;