# Introduction to JavaScript

## What is JavaScript?

JavaScript is a cross-platform, object-oriented scripting language that's used for web development, in web applications, for game development, and lots more. It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS.(e.g., having complex animations, clickable buttons, popup menus, etc.).

## What can you do with JavaScript?

This language is used by many large companies like Facebook, Google etc. You can use JavaScript to build full-blown web or mobile apps as well as real time networking apps like video chat app or streaming apps , Command line tools and even Games.

## Where does the JavaScript code run ?

JavaScript was originally design to run only in browsers so every browser has what we call a JavaScript engine that can execute JavaScript code for example the JavaScript engines in firefox and chrome are SpiderMonkey and v8 in 2009 a very clever engineer called Ryan Dahl took the open-source JavaScript engine in chrome and embedded it inside a C++ program he called that program node the node is a C++ program that includes Google's v8 JavaScript engine now with this we can run JavaScript code outside of a browser so we can pass our JavaScript code to node for execution and this means with JavaScript we can build the backend for our web and mobile application so in a nutshell JavaScript code can be run inside a browser or in node browsers and node provide a runtime environment for our JavaScript code.

## JavaScript vs the ECMAScript

JavaScript is standardized at Ecma International — the European association for standardizing information and communication systems (ECMA was formerly an acronym for the European Computer Manufacturers Association) to deliver a standardized, international programming language based on JavaScript. ECMAScript is just a specification while JavaScript is a programming language that confirms to these specification, so we have this organisation called a ECMA which is responsible for defining standards they take care of this ECMAScript.

## Getting started with JavaScript

JavaScript can be added to your HTML file in two ways :
<li> Internal JS - We can add JavaScript directly to our HTML file by writing the code inside the <script> tag. The script tag can be either placed inside <head> or <body> tag . The best practice which most programmers follow is writing <script> tag inside body towards the end.

<li> External JS - We can write JavaScript code in other file having an extension .js and then link this file inside the <head> tag of the HTML file

Syntax : 
<script> 
// JavaScript Code
</script>

For Example:

```

<!DOCTYPE html>
<html lang="en">
   
<head>
    <title>
        Basic Example to Describe JavaScript
    </title>
</head>
   
<body>
   
    <!-- JavaScript code can be embedded inside
        head section or body section -->
    <script>
        console.log("Hello JavaScript!");
    </script>
</body>
   
</html>

```

 Output: The output will display on the console. i.e. Option + ⌘ + J (on macOS), or Shift + CTRL + J (on Windows/Linux).

 ```

 Hello JavaScript!

 ```