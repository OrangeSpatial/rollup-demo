import { add } from './foo.js';
import './style.css'

function sum(num_arr: number[]) {
  return num_arr.reduce(function (acc, cur) {
    return add(acc, cur);
  }, 0);
}
console.log(sum([1, 2, 3, 4, 5]));

export { sum as default };
