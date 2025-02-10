function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined) {
    return null; // Handle null or undefined inputs using strict equality
  }

  // ... rest of the function
}