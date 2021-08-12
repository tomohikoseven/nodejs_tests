const getName = (id) => {
  return { name: `${id}_tarou` };
};

const getAge = (id) => {
  return { age: `${id}_21` };
};

class Member {
  id;
  constructor(id) {
    this.id = id;
  }
  getName() {
    return { name: `${this.id}_tarou` };
  }
  getAge() {
    return { age: `${this.id}_21` };
  }
}

exports.getAge = getAge;
exports.getName = getName;
exports.Member = Member;