/*Assignment 1: Building Your Friend List
Learning Objective: Practice working with objects and arrays in TypeScript to create a data
structure.
Task: Create a program that manages a simple friend list.
1. Define an object named people containing an empty array called friends.
2. Create three separate objects, each representing a friend, with properties like firstName,
lastName, and optionally id.
3. Add these friend objects to the friends array within the people object.
4. Output the entire people object to the console, displaying your information and your
friend list.*/
// 1. Define an object named people containing an empty array called friends
var people = {
    friends: []
};
// 2. Create three separate objects, each representing a friend
var friend1 = {
    firstName: "sadaf",
    lastName: "Khan",
    id: 1
};
var friend2 = {
    firstName: "maria",
    lastName: "khan",
    id: 2
};
var friend3 = {
    firstName: "haniya",
    lastName: "jabeen",
    id: 3
};
// 3. Add these friends objects to the friends array within the people object
// Method 1
//  people.friends.push(friend1, friend2, friend3);
// Method 2
people.friends.unshift(friend3);
people.friends.unshift(friend2);
people.friends.unshift(friend1);
// 4. Output the entire people object to console
console.log(people);
//     Assignment 2:Manipulating an Array: Rearranging Words
//Objective:
//Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
//Steps:
//1. Scrambled Array:
//o Start with an array of elements in a scrambled order, like:
//const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
//• Modify the Array:
//• Use methods like split(), join(), push(), pop(), shift(), and unshift() to: 
//o Convert non-strings (booleans, numbers) to strings if needed.
//o Split elements into character arrays (optional).
//o Rearrange characters or elements in the desired order (modify original array or 
//  create temporary arrays).
//• Output the Result:
//• Use join() to combine elements back into a single string: "I am a student of GIAIC"
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.splice(2, 4);
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray.splice(1, 0, "am", "a");
var Join = scrambledArray.join(" ");
console.log(Join);
console.log('\n');
//                      Assignment 3: Company Product Catalog
//Task: Create a program to represent a product catalog using an array and perform basic queries.
//1. Define an array named inventory to store product information.
//2. Create three separate objects, each representing a product, with properties like name, 
//   model, cost, and quantity.
//3. Add these product objects to the inventory array using an appropriate array method.
//4. Access and log the quantity property of a specific product (e.g., third product) in the 
//   inventory array.
//5. Explore adding and accessing more elements within the inventory array to understand 
//   how to manage product data.
var inventory = [];
var product1 = {
    name: "Laptop",
    model: "XPS 15",
    cost: 50000,
    quantity: 25
};
var product2 = {
    name: "Smartphone",
    model: "motorola moto g 5 1",
    cost: 40000,
    quantity: 10
};
var product3 = {
    name: "Headphones",
    model: "WH-1000XM4",
    cost: 2000,
    quantity: 15
};
inventory.push(product1, product2, product3);
console.log("Quantity of the third product:", inventory[2].quantity);
// Adding another product to the inventory
var product4 = {
    name: "smart watch ",
    model: "h 10 ultra",
    cost: 9000,
    quantity: 10
};
inventory.push(product4);
console.log("Current inventory:", inventory);
console.log("Details of the fourth product:", inventory[3]);
inventory[0].quantity += 5;
console.log("Updated quantity of the first product:", inventory[0].quantity);
var removedProduct = inventory.splice(1, 1)[0];
console.log("Removed product:", removedProduct);
console.log("Updated inventory:", inventory);
console.log('\n');
var students = [
    { name: "Amna", isSenior: true, hasCompletedAssignments: true },
    { name: "Maria", isSenior: false, hasCompletedAssignments: false },
    { name: "Fatima", isSenior: true, hasCompletedAssignments: false },
    { name: "Zahra", isSenior: false, hasCompletedAssignments: true },
    { name: "Jamila", isSenior: true, hasCompletedAssignments: true },
];
function findSeniorStudentsWithAssignments(students) {
    return students.filter(function (student) { return student.isSenior && student.hasCompletedAssignments; });
}
var seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
console.log("Senior Students with Assignments :", seniorStudentsWithAssignments);
function removeIncompleteAssignments(students) {
    return students.filter(function (student) { return student.isSenior && student.hasCompletedAssignments; });
}
var updatedClassList = removeIncompleteAssignments(students);
console.log("Updated Class List :", updatedClassList);
