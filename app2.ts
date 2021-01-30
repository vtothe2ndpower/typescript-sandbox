// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Victor',
//   age: 24,
//   hobbies: ['Lifting', 'Reading'],
//   role: [2, 'author'] // Tuple
// }

// person.role.push('admin');
// person.role[1] = 10;

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: 'Victor',
  age: 24,
  hobbies: ['Lifting', 'Reading'],
  role: Role.ADMIN
}

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}