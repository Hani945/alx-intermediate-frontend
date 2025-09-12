// 1. String literal type for subjects
type Subjects = "Math" | "History";

// 2. teachClass function
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
  // optional fallback (TypeScript ensures only "Math" or "History" are allowed)
}

// 3. Test cases
console.log(teachClass("Math"));    // Teaching Math
console.log(teachClass("History")); // Teaching History
