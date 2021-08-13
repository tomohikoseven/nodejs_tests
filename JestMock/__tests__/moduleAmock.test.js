jest.mock('../moduleA', () => {
    //moduleAモジュールのimport結果をmock
    return {
        //TextModuleAクラスのコンストラクタのmock定義
        TextModuleA: jest.fn().mockImplementation(() => {
            return {
                exec: jest.fn(),
            }
        }),
        //CalcModuleAクラスのコンストラクタのmock定義
        CalcModuleA: jest.fn().mockImplementation(() => {
            return {
                //execメソッドをmock化し、常に1を返すように設定
                exec: jest.fn().mockReturnValue(1),
            }
        })
    }
});
var { TextModuleA } = require('../moduleA');
var { TestClass } = require('../testA');;

describe('jest.mock', () => {
    it(`TextModuleA.exec mock`, () => {
        //TestClassクラスに渡すTextModuleAクラスのインスタンスを作成
        const t = new TextModuleA();
        //execメソッドのmock定義を取得
        const mockTextExec = t.exec;
        //mock処理を仕込む
        mockTextExec.mockImplementation((a, b) => {
            return `mock`;
        });
        const test = new TestClass(t);
        //testインスタンス内のCalcModuleAクラスのexecメソッドのmock定義を取得
        //const mockCalcExec = test['calc'].exec;
        const mockCalcExec = test.calc.exec;

        //テスト対象のメソッドを実行
        const result = test.getText('testA', 'planB');
        console.log(`mock result: ${result}`);

        //mock化したメソッドの引数を検証
        expect(mockTextExec).toBeCalledWith('te', 'nB');
        expect(mockCalcExec).toBeCalledWith(5, 5);
        //テスト対象メソッドの結果を検証
        expect(result).toBe('mocktA1');
    });
})