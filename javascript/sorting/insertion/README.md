# Insertion Sort

## Pseudocode

``` Pseudocode
Insert(int[] sorted, int value)
  initialize i to 0
  WHILE value > sorted[i]
    set i to i + 1
  WHILE i < sorted.length
    set temp to sorted[i]
    set sorted[i] to value
    set value to temp
    set i to i + 1
  append value to sorted
InsertionSort(int[] input)
  LET sorted = New Empty Array
  sorted[0] = input[0]
  FOR i from 1 up to input.length
    Insert(sorted, input[i])
  return sorted
```

## Javascript

```javascript
function pushIntoArray(array, value) {
     let i = 0;
     let temp = null;
     while(value > array[i]){
          i++
     }
     while(i < array.length){
          temp = array[i];
          array[i] = value;
          value = temp;
          i++;
     }
     array.push(value);
}

function insertionSort(array){
     let sorted = [];
     sorted[0] = array[0];
     for(let i = 1; i < array.length; i++){
          pushIntoArray(sorted, array[i])
     }
     return sorted
}
```

## Efficiency

Space: O(1)

> Space Complexity: O(1) - The algorithm sorts the array in place, so it does
not use any extra space that scales with the size of the input array. The space
usage is constant, hence the space complexity is O(1). - GitHub Copilot

Time: O(n^2)
