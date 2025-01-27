function fibs(n) {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
}

function fibsRec(n) {
  if (n == 0) {
    return [0];
  } else if (n == 1) {
    return [0, 1];
  } else {
    let arr = fibsRec(n - 1);
    let num = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(num);
    return arr;
  }
}


/*

*/
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const left = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  console.log('left:')
  console.log(left);
  const right = mergeSort(arr.slice(Math.floor(arr.length / 2)));
  console.log('right:');
  console.log(right);
  const sorted = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sorted.push(left[i++]);
    } else {
      sorted.push(right[j++]);
    }
  }

  return sorted.concat(left.slice(i), right.slice(j));
}

console.log(mergeSort([676, 10, 937, 105, 181]));
