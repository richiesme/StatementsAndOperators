// Logical argument/ syllogism
/* All men are mortal
Socrates is a man.
Therefore, socrates is mortal. */

/* From logical argument above, using "if statements and logical operators and data types" to recreate this logical argument as seen below; */

const allMenAreMortal = true // using the const variableName stating that "All men are mortal" and assigning the boolean value true
const socratesIsMan = true // using the const varableName stating that "Socrates is a man" with a booloean value true

if (allMenAreMortal) {
  console.log('All men are mortal')
} if (socratesIsMan) {
  console.log('Socrates is a man.')
}
if (allMenAreMortal && socratesIsMan) {
  console.log('Therefore, socrates is mortal.') // using the AND && operator to implement the statement that "Therefore, socrates is mortal", if all men are mortal and socrates is a man.
}
