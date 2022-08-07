# JavaScript Events

A JavaScript Events are actions occur in your Web page when you do something. For example - onclick event, In this event when you click some thing it will wo some actions in your Web page.

# How to use JavaScript Events

1. Select any element (ex- button, image etc) in which you have to use JavaScript Events.

2. Then use ""addEventListener"" property of that element to use your Events. 

3. Write your Event name and tasks which occur in your Web page when Event is triggered.

# Common JavaScript Events

1. ### onchange 
- An HTML element has been changed.

2. ### onclick 
- The user clicks an HTML element.

3. ### onmouseover 
- The user moves the mouse over an HTML element.

4. ### onmouseout 
- The user moves the mouse away from an HTML element.

5. ### onkeydown 
- The user pushes a keyboard key.

6. ### onload 
- The browser has finished loading the page.

# Code Snippet For JavaScript Events

``` html
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>JavaScript Events</title>
    </head>
   
   <body>
      <div class="container"> 
        <p id="para">This is an example of one of the JavaScript Events - onclick</p>
      </div>
   </body>

    <script>
        // taking the paragraph element for using "onclick" JavaScript Event
        const para = document.getElementById("para");


        para.addEventListener('onclick', () => {
            console.log("Paragraph Element was got clicked");   // This will show in console when the paragraph element clicked by the user
        });

    </script>
</html>
```
