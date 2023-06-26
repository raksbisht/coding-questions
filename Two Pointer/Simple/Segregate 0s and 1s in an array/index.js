function segregateZeroesAndOnes(arr) {
  let left = 0;
  let right=arr.length-1;

  while (left<right){
      if (arr[left]==1 && arr[right]==0){
         let temp = arr[left];
         arr[left] = arr[right];
         arr[right] = temp;
         left++;
         right--;
      }else if (arr[left]==0){
          left++
      }else if (arr[right]==1){
          right--;
      }
  }
  return arr;

}

// Example usage
// const array = [0, 1, 0, 1, 1, 0, 0, 1];
const array = [1, 1, 0, 1, 0, 1, 0, 1];
console.log(segregateZeroesAndOnes(array)); // Output: [0, 0, 0, 0, 1, 1, 1, 1]
