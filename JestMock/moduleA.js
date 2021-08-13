class CalcModuleA {
    constructor(x /*number*/ ){
      this.x = x;
    }
    exec(a /*number*/, b/*number*/) {
        return a + b - this.x;
    }
}
class TextModuleA {
    exec(a /*string*/, b /*string*/) {
        return a + b;
    }
}

exports.CalcModuleA = CalcModuleA;
exports.TextModuleA = TextModuleA;