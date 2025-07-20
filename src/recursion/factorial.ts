// Each recursive call adds a new frame to the call stack.
// When the base case is hit, the stack unwinds.
// Logging helps visualize the order of calls and returns.


 /* Call Stack build-up (going down):
 factorial(4)
 → needs result of factorial(3)
 ↓
 factorial(4)
 factorial(3)
 → needs result of factorial(2)
 ↓
 factorial(4)
 factorial(3)
 factorial(2)
 → needs result of factorial(1)
 ↓
 factorial(4)
 factorial(3)
 factorial(2)
 factorial(1) → base case reached

 Now stack starts to unwind (going up):
 factorial(1) → returns 1
 factorial(2) → 2 * 1 = 2
 factorial(3) → 3 * 2 = 6
 factorial(4) → 4 * 6 = 24
*/

function factorial(n: number): number {

  if (n === 0 || n === 1) {
    console.log(`📥 Calling factorial(${n})`);
    return 1;
  }
  const result =  n * factorial(n - 1);
    console.log(`📤 Returning: factorial(${n}) = ${n} * factorial(${n - 1}) = ${result}`);
    return result;

}
factorial(5);
