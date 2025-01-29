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
  const right = mergeSort(arr.slice(Math.floor(arr.length / 2)));
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

function binarySearch(n, arr) {
  if (arr.length == 0) {
    return false;
  } else {
    const midpoint = Math.floor(arr.length / 2);
    if (n == arr[midpoint]) {
      return true;
    } else if (n < arr[midpoint]) {
      return binarySearch(n, arr.slice(0, midpoint));
    } else {
      return binarySearch(n, arr.slice(midpoint + 1));
    }
  }
}
if (binarySearch(8,[1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) {
  console.log("value found");
} else {
  console.log("value not found");
}