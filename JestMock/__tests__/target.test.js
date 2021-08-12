var { getObj, verClass } = require("../target");

jest.mock("../service", () => {
  return {
    getName: (id) => { return { name: `${id}_tarou`} },
    getAge: (id) => { return { age: `${id}_21` } },
  }
});

it("targetにtarouを設定して実行すると{result: 'tarou'}が返却されること", () => {
  // 関数ver
  expect(getObj("01")).toEqual({ name: "01_tarou", age: "01_21" });
  // クラスver
  // expect(verClass("01")).toEqual({ name: "01_tarou", age: "01_21" });

});