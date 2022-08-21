# JavaScript JSON
JSON is a format for storing and transporting data.
JSON is often used when data is sent from a server to a web page.

# What is JSON?
1. JavaScript Object Notation, or JSON,
2. A lightweight data interchange format is JSON.
3. JSON is not language specific.
4. JSON is straightforward and "self-describing."

# JSON Syntax Rules
1. Data is in name/value pairs
2. Data is separated by commas
3. Curly braces hold objects
4. Square brackets hold arrays

# JSON Example
This JSON syntax defines an employees object: an array of 3 employee records (objects):
{
"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]
}

# JSON Data - A Name and a Value
JSON data is written as name/value pairs, just like JavaScript object properties.
A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:
"firstName":"John"

# JSON Arrays
JSON arrays are written inside square brackets.
Just like in JavaScript, an array can contain objects:

"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]
In the example above, the object "employees" is an array. It contains three objects.
Each object is a record of a person (with a first name and a last name).

# Converting a JSON Text to a JavaScript Object
A common use of JSON is to read data from a web server, and display the data in a web page.
For simplicity, this can be demonstrated using a string as input.
First, create a JavaScript string containing JSON syntax:

let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
