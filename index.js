'use strict';
// 配列で渡された整数を全て足す関数
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}
// 配列で渡された整数を全てかける関数
const multi = numbers => {
    let result = 1;
    for (let num of numbers) {
      result = result * num;
    }
    return result;
};
module.exports = {
    add: add,
  multi : multi
};
