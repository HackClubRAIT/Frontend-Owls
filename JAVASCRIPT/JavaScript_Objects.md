# Javascript Objects

A javaScript object is an entity having state and behavior (properties and method). For example: car, pen, bike, chair, glass, keyboard, monitor etc.

# 3 ways to create objects.

1. By object literal
2. By creating instance of Object directly (using new keyword)
3. By using an object constructor (using new keyword)

# 1. By object literal

```html
<html>
<body>
<script>  
emp={id:102,name:"Shyam Kumar",salary:40000}  
document.write(emp.id+" "+emp.name+" "+emp.salary);  
</script>
</body>
</html>
```
# 2. By creating instance of Object

```html
<html>
<body>
<script>  
var emp=new Object();  
emp.id=101;  
emp.name="Ravi Malik";  
emp.salary=50000;  
document.write(emp.id+" "+emp.name+" "+emp.salary);  
</script> 
</body>
</html>
```

# 3. By using an object constructor

```html
<html>
<body>
<script>  
function emp(id,name,salary){  
this.id=id;  
this.name=name;  
this.salary=salary;  
}  
e=new emp(103,"Vimal Jaiswal",30000);  
  
document.write(e.id+" "+e.name+" "+e.salary);  
</script>  
</body>
</html>
```

# Nested Objects

Values in an object can be another object.

```html
<html>
<body>

<h2>JavaScript Objects</h2>
<p>Access nested objects:</p>

<p id="demo"></p>

<script>
const myObj = {
  name: "John",
  age: 30,
  cars: {
  car1: "Ford",
  car2: "BMW",
  car3: "Fiat"
  }
}
document.getElementById("demo").innerHTML = myObj.cars.car2;
</script>

</body>
</html>
```

# Display Objects

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Objects</h2>
<p>Displaying a JavaScript object will output [object Object]:</p>

<p id="demo"></p>

<script>
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

document.getElementById("demo").innerHTML = person;
</script>

</body>
</html>
```





