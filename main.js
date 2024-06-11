#! /usr/bin/env node 
import inquirer from "inquirer";
console.log("Welcome to my adventure quiz game:");
console.log("You are required to gain maximum 4 points for the window.");
let point = 0;
let question1 = await inquirer.prompt([
    {
        name: "one",
        type: "list",
        message: "typescript is a super set off?",
        choices: [
            "Python",
            "C++",
            "Java",
            "Java script"
        ]
    }
]);
if (question1.one === "Java script") {
    console.log("your answer is correct");
    point++;
}
else {
    console.log("incorrect answer");
}
let question2 = await inquirer.prompt([
    {
        name: "two",
        type: "list",
        message: "Which of the following is true about TypeScript?",
        choices: [
            "TypeScript is a superset of Python",
            "TypeScript is a superset of JavaScript",
            "TypeScript is a subset of JavaScript",
            "TypeScript is unrelated to JavaScript",
        ]
    }
]);
if (question2.two === "TypeScript is a superset of JavaScript") {
    console.log("your answer is correct");
    point++;
}
else {
    console.log("incorrect answer");
}
let question3 = await inquirer.prompt([
    {
        name: "three",
        type: "list",
        message: "Which of the following keywords is used to declare a variable with a specific type in TypeScript?",
        choices: [
            "var",
            "let",
            "const",
            "All of the above"
        ]
    }
]);
if (question1.three === "All of the above") {
    console.log("your answer is correct");
    point++;
}
else {
    console.log("incorrect answer");
}
let question4 = await inquirer.prompt([
    {
        name: "four",
        type: "list",
        message: "How do you define an interface in TypeScript?",
        choices: [
            "interface MyInterface { }",
            "class MyInterface { }",
            "type MyInterface { }",
            "struct MyInterface { }"
        ]
    }
]);
if (question1.four === "interface MyInterface { }") {
    console.log("your answer is correct");
    point++;
}
else {
    console.log("incorrect answer");
}
let question5 = await inquirer.prompt([
    {
        name: "five",
        type: "list",
        message: "Which of the following can be used to specify the type of a function parameter in TypeScript?",
        choices: [
            "function greet(name: string) { }",
            "function greet(string name) { }",
            "function greet(name) { }",
            "function greeeet(name) {}"
        ]
    }
]);
if (question1.five === "function greet(name: string) { }") {
    console.log("your answer is correct");
    point++;
}
else {
    console.log("incorrect answer");
}
if (point >= 4) {
    console.log("congratulations!!");
    console.log(`your points: ${point}`);
}
else {
    console.log("you loss!! try next time");
}
