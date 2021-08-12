var { getName, getAge, Member } = require("./service");

// 関数の場合
function getObj (id) {
  const { name } = getName(id);
  const { age } = getAge(id);
  return { name, age };
};
exports.getObj = getObj;

// クラスの場合
const verClass = (id) => {
  const member = new Member(id);
  const { name } = member.getName();
  const { age } = member.getAge();
  return { name, age };
};
exports.verClass = verClass;