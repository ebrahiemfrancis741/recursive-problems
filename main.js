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

console.log(fibsRec(10));
