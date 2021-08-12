var { ClassA } = require("../instanceMock");

describe("ClassA#func", () => {
  it("ClassB#someFuncの結果をtoUpperCaseしていることをテストする", () => {
    const bMock = { someFunc: () => "foo" };
    const a = new ClassA(bMock);
    expect(a.func()).toBe("FOO");
  });

  it("ClassB#someFuncの結果をtoUpperCaseしていることをテストする", () => {
    const bMock = { someFunc: jest.fn() };
    bMock.someFunc.mockReturnValueOnce("foo");
    const a = new ClassA(bMock);
    expect(a.func()).toBe("FOO");
    expect(bMock.someFunc).toBeCalledTimes(1);
  });

  it("ClassB#someFuncの結果をtoUpperCaseしていることをテストする", () => {
    const bMock = { someFunc: jest.fn() };
    // bMock.someFunc.mockReturnValueOnce("foo");
    when(bMock.someFunc).expectCalledWith().mockReturnValueOnce("foo")
    const a = new ClassA(bMock);
    expect(a.func()).toBe("FOO");
    expect(bMock.someFunc).toBeCalledTimes(1);
  });
});