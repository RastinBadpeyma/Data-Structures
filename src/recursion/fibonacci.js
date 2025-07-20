
// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8


function fibonacciIterative(n) {
  let arr = [0, 1];
  console.log(`Start: arr = [0, 1]`);

  for (let i = 2; i <= n; i++) {
    const next = arr[i - 2] + arr[i - 1];
    arr.push(next);
    console.log(`i=${i}: arr[${i - 2}] + arr[${i - 1}] = ${arr[i - 2]} + ${arr[i - 1]} = ${next}`);
  }

  console.log(`Result: F(${n}) = ${arr[n]}`);
  return arr[n];
}

  fibonacciIterative(3);
  
  function fibonacciRecursive(n) {
    if (n < 2){
      return n;
    }
    // console.log(`fibonacciRecursive(${n} - 1) + fibonacciRecursive (${n} - 2)`);
    return fibonacciRecursive(n - 1) + fibonacciRecursive (n - 2)
  }
  
  fibonacciRecursive(6)
