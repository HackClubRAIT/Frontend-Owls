# JavaScript Functions

A JavaScript function is a block of code designed to perform a particular task.A JavaScript function is executed when "something" invokes it. 

# JavaScript Function Syntax

1. A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

2. Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

3. The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

4. The code to be executed, by the function, is placed inside curly brackets: {}

5. Function parameters are listed inside the parentheses () in the function definition.

6. Function arguments are the values received by the function when it is invoked.

```html
<html>
<body>
<script>  
function msg(){  
alert("hello! this is message");  
}  
</script>  
<input type="button" onclick="msg()" value="call function"/>  
</body>
</html>
```

 # Function Parameters

 There is a facility to pass different parameters while calling a function. These passed parameters can be captured inside the function and any manipulation can be done over those parameters. A function can take multiple parameters separated by comma.

```html
<html>
   <head>   
      <script type = "text/javascript">
         function sayHello(name, age) {
            document.write (name + " is " + age + " years old.");
         }
      </script>      
   </head>
   
   <body>
      <p>Click the following button to call the function</p>      
      <form>
         <input type = "button" onclick = "sayHello('Zara', 7)" value = "Say Hello">
      </form>      
      <p>Use different parameters inside the function and then try...</p>
   </body>
</html>
```

# The return Statement

A JavaScript function can have an optional return statement. This is required if you want to return a value from a function. This statement should be the last statement in a function.

```html
<html>
   <head>  
      <script type = "text/javascript">
         function concatenate(first, last) {
            var full;
            full = first + last;
            return full;
         }
         function secondFunction() {
            var result;
            result = concatenate('Zara', 'Ali');
            document.write (result );
         }
      </script>      
   </head>
   
   <body>
      <p>Click the following button to call the function</p>      
      <form>
         <input type = "button" onclick = "secondFunction()" value = "Call Function">
      </form>      
      <p>Use different parameters inside the function and then try...</p>  
  </body>
</html>
```
