## What is Variables in JavaScript?

We use a variable to store data temporarily in computers memory. We can store variable in form of name so that we can read data at the given location in future, so in a nutshell a variable is a “named storage” for data.

## Declaration Syntax 

We can declare variables to store data by using the var, let, or const keywords.
- let – is a modern variable declaration.
- var – is an old-school variable declaration.
- const – is like let, but the value of the variable can’t be changed.

## Example 
Here we will use let keyword.
```
let message = 'Hello Variable!'; // define the variable and assign the value

alert(message); // Hello Variable!
```
## Note

Variable cannot have same value. For Example.
```
let message;

message = 'Hello!';

message = 'Variable!'; // value changed

alert(message);

Output:- Variable!
```

## Rules to write Variables

1) Cannot be a reserved keyword like if else var etc.

2) Should be meaningful names viewer should know the meaning.

3) They cannot be start with numbers

4) They cannot contain space or hyphen

5) They are case sensitive

6) CamelCase notation are used in JavaScript
