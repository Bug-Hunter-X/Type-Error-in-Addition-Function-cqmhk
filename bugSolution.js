function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0; // Handle non-number inputs appropriately
  }
  if (a === null || b === null) {
    return 0;
  }
  return a + b; 
}