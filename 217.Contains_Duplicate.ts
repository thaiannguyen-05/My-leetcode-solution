const nums = [1,2,3,1];

const array = new Map<number, number>();
    nums.sort();

function compare() {
  for (const element of nums) {
    const value = array.get(element) || 0;
    array.set(element, value + 1);

    if ((array.get(element) || 0) === 2) return true;
  }
  return false;

}

console.log(compare());







