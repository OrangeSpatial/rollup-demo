import { add, foo } from './foo.js';
import './style.css'

export default function sum(num_arr: number[]) {
  return {
    sum: num_arr.reduce((a, b) => add(a, b), 0),
    bar: foo.bar
  }
}
console.log(sum([1, 2, 3, 4, 5]));
