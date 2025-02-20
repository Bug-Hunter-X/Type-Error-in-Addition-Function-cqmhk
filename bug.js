function foo(a, b) {
  if (a === null || b === null) {
    return 0; //This will cause a type error if a or b is not a number
  }
  return a + b; 
}