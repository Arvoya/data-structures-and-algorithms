# Shift Array

Insert and shift an array in middle at index

## Whiteboard Process

![whiteboard image](./whiteboard.png)

## Approach & Efficiency

My approach was to create a new array, divide the length of the original array
and use that to determine the length of for loop to iterate over the original array
and push each element to the new array. Then I insert the value at the index
and continue to push the rest of the elements to the new array.

## Solution

``` javascript

function insertShiftArray(array, givenValue) {
let newArr =[];

let midValue = array.length/2

for(let i =0; i < midValue; i ++;){
newArr.push(array[i]);
}
newArr.push(givenValue)

for(let i = midValue; i < array.length; i ++){
newArr.push(array[i]);
}

return newArr;
}

```
