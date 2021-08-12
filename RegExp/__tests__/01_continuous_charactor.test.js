var { continueChar } = require("../01_continuous_charactor");

describe("連続する文字列を含む場合を判定する関数.", () => {
  test("引数に同じ4文字の文字列が指定された場合、trueが返ること.", () => {
    expect(continueChar('aaaa')).toBeTruthy();
  });
  test("引数に同じ文字4つを含む文字列が指定された場合、trueが返ること.", () => {
    expect(continueChar('Hoaaaan')).toBeTruthy();
  });
  test("引数に1文字の文字列が指定された場合、falseが返ること.", () => {
    expect(continueChar('a')).toBeFalsy();
  });
  test("引数に異なる文字を使用した2文字の文字列が指定された場合、falseが返ること.", () => {
    expect(continueChar('ab')).toBeFalsy();
  });
});