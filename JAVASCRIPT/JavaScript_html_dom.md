# What is DOM?
DOM stands for Document Object Model.
When a web page is loaded DOM is created.It is used to write programs to make changes in the structure,style and content of web page.
# HTML DOM
A document containing HTML is described using the Document interface, which is extended by the HTML specification to include various HTML-specific features. In particular, the Element interface is enhanced to become HTMLElement and various subclasses, each representing one of (or a family of closely related) elements.

The HTML DOM API provides access to various browser features such as tabs and windows, CSS styles and stylesheets, browser history, and so forth. These interfaces are discussed further in the HTML DOM API documentation.


![](https://www.w3schools.com/whatis/img_htmltree.gif
)
 The HTML DOM Tree of Objects
 <br>
 <P>In HTML DOM we treat HTML elements as objects to change it'S properties(Values we like to set on HTML elements),to add methods(actions we can perform on HTML elements) and events.</p>
 
 ## DOM Methods
 1. getElementById(): returns the element having the given id value.
 2. getElementsByName(): returns all the elements having the given name value.
 3. getElementsByTagName(): returns all the elements having the given tag name.
 4. getElementsByClassName(): returns all the elements having the given class name.
 5. innerHTML :The innerHTML property is useful for getting or replacing the content of HTML elements.
 6. element.attribute: 	Change the attribute value of an HTML element
 7. element.style.property: Change the style of an HTML element
 8. element.setAttribute(attribute, value): 	Change the attribute value of an HTML element
 9. document.createElement(element): Create an HTML element
10. document.removeChild(element): Remove an HTML element
11. document.appendChild(element): Add an HTML element
12. document.replaceChild(new, old): Replace an HTML element
13. document.write(text): Write into the HTML output stream
14. document.getElementById(id).onclick = function(){code}: Adding event handler code to an onclick event
Example:
 ```
<!DOCTYPE html>
<html>

<body>
	<h2>GeeksforGeeks</h2>

	<!-- Finding the HTML Elements by their Id in DOM -->
	<p id="intro">A Computer Science portal for geeks.</p>



	


<p>This example illustrates the <b>getElementById</b> method.</p>



	<p id="demo"></p>



	<script>
	const element = document.getElementById("intro");
	document.getElementById("demo").innerHTML =
	"GeeksforGeeks introduction is: " + element.innerHTML;
	</script>
</body>

</html>

 ```
 Output:
 ![](https://media.geeksforgeeks.org/wp-content/uploads/20220524133334/Annotation20220524133318.jpg)
## Changing HTML Styles
Syntax: document.getElementById(id).style.property = new style

Example:
```
<html>
<body>

<p id="p2">Hello World!</p>

<script>
document.getElementById("p2").style.color = "blue";
</script>

</body>
</html>
```
## Reacting to Events
Syntax: onclick=JavaScript

It us used for:
> When a user clicks the mouse
> When a web page has loaded
>When an image has been loaded etc.

Example:
```
<!DOCTYPE html>
<html>
<body>

<h1 onclick="this.innerHTML = 'Ooops!'">Click on this text!</h1>

</body>
</html>
```
### The onload and onunload Events
The onload and onunload events are triggered when the user enters or leaves the page.
<br>Example: ```<body onload="checkCookies()">```

### The onchange Event
The onchange event is often used in combination with validation of input fields.
<br>Example: ```<input type="text" id="fname" onchange="upperCase()">```

### The onmouseover and onmouseout Events
The onmouseover and onmouseout events can be used to trigger a function when the user mouses over, or out of, an HTML element.

## DOM EventListener
addEventListener(): The addEventListener() method attaches an event handler to the specified element.
<br>Syntax: element.addEventListener(event, function, useCapture);

Example:
```
element.addEventListener("click", myFunction);

function myFunction() {
  alert ("Hello World!");
}
```

---
## Conclusion
This is the documentation for you to get started with HTML DOM.For more detailed study and advancec topic do checkout: 
<br>

1. [W3Schools](https://www.w3schools.com/js/js_htmldom_navigation.asp)<br>
2. [mdn docs](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
3. [geeksforgeeks](https://www.geeksforgeeks.org/dom-document-object-model/)
---
---
Don't forget to give a ⭐ to [Frontend-owls](https://github.com/HackClubRAIT/Frontend-Owls) and keep contributing.
<br>
Happy Coding!
---

