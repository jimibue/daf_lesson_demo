export const sort_first_md = `
## Sorting an array 

sorting an array is something that is a common problem in coding, but by and large this is something we never have to go in and write the code for since all languages are going to have built in ways to sort an array.  

For this we are going to pretend that we have to do it ourselfs. We are also going to do this in steps. Today we will focus on finding the lowest item in the array and swapping it out with the first item.  Then we can figure out later how to repeat this process.  

### Challenge
~~~js
// write a function that takes an array and returns the array with the lowest item in the array at the [0] index 

// example
const sortFirst=(arr)=>{}

sortFirst([3,2,1,0]) // => [0,2,1,3]
~~~

`;

export const sort_first_solition_md = `
## Solution: Sorting an array part1
 
~~~js
// write a function that takes an array  and returns the array with the lowest item in the array at the [0] index 

// example
const sortFirst=(arr)=>{
  // set lowest and index to first by default
  let lowest = arr[0]
  let lowestIndex = 0
   arr.forEach( (num,i)=>{
      if(num < lowest) {
         lowest = num;
         lowestIndex = i;
      }
  })
  // need to swap 0 index with lowestIndex (need temp variable here)
  let temp = arr[0];
  arr[0] = lowest;
  arr[lowestIndex] = temp

 // finally
return arr
 
}
`;
