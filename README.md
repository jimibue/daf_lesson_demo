```js
// write a function that takes an array  and returns the array with the lowest item in the array at the [0] index

// example
const sortFirst = (arr) => {
  // set lowest and index to first by default
  let lowest = arr[0];
  let lowestIndex = 0;
  arr.forEach((num, i) => {
    if (num < lowest) {
      lowest = num;
      lowestIndex = i;
    }
  });
  // need to swap 0 index with lowestIndex (need temp variable here)
  let temp = arr[0];
  arr[0] = lowest;
  arr[lowestIndex] = temp;

  // finally
  return arr;
};
```
