/**
 * @author Brayden Thistle
 * @version 1.0.0
 * @date 2025-12-12
 * @fileoverview this program asks the user for the amount of integers they want added and then asks for each integer and calculatest the sum and displays it
 */

//variables
let integeramount: number;
let integer: number;
let total: number = 0;

//declaring "integeramount"
integeramount = Number(prompt("How many integers are going to be added?"));

//loop
for
(let integercount = 1; integercount <= integeramount; integercount++) {
integer = Number(prompt("Enter an integer:"));
total = total + integer;
}
//output
console.log(`the total is ${total}`);
console.log("\nDone");