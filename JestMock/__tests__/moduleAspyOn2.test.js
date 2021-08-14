var { CalcModuleA, TextModuleA } = require( '../moduleA');
var { TestClass } = require( '../testA');

describe('spyOn prototype', () => {
    beforeEach(() => {
        //CalcModuleAクラスのexecメソッドをmock化
        jest.spyOn(CalcModuleA.prototype, 'exec');
        //TextModuleAクラスのexecメソッドのmock化
        jest.spyOn(TextModuleA.prototype, 'exec');
    });
    afterEach(() => {
        //test外で、mock定義を行うため、`afterEach()`で、mockの初期化やクリア処理を行う。
        //CalcModuleAクラスのexecメソッドのmock履歴をクリア
        CalcModuleA.prototype.exec.mockClear();
        //TextModuleAクラスのexecメソッドのmock定義を本来のものに戻す
        TextModuleA.prototype.exec.mockRestore();
    })
    it(`TextModuleA.exec mock`, () => {
        //TextModuleAクラスのexecメソッドのmock処理を仕込む
        TextModuleA.prototype.exec.mockImplementation((a, b) => {
            return `spy`;
        });

        //TestClassクラスに渡すTextModuleAクラスのインスタンスを作成
        const t = new TextModuleA();
        const test = new TestClass(t);

        //テスト対象のメソッドを実行
        const result = test.getText('testA', 'planB');
        console.log(`spyOn result: ${result}`);

        //mock化したメソッドの引数を検証
        expect(TextModuleA.prototype.exec).toBeCalledTimes(1);
        expect(TextModuleA.prototype.exec).toBeCalledWith('te', 'nB');
        expect(CalcModuleA.prototype.exec).toBeCalledTimes(1);
        expect(CalcModuleA.prototype.exec).toBeCalledWith(5, 5);
        //テスト対象メソッドの結果を検証
        expect(result).toBe('spytA9');
    });
});