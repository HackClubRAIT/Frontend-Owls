# CSS Transitions

- CSS transitions allows us to change property values smoothly, over a given duration.

<br>

## How to Use CSS Transitions?

- To create a transition effect, it is necessary to specify two things:
<pre> 1. The CSS property to which we want to add an effect.
 2. Duration of the effect. </pre>
 
 <br>
 
## Transition-timing-function property

- This property specifies the speed curve of the transition effect.
- The transition-timing-function property can have the following values:
<pre> 1. Ease - Specifies a transition effect with a slow start then it becomes fast and then ends slowly.
 2. Linear - Specifies a transition effect with the same speed from start to end.
 3. Ease-in - Specifies a transition effect with a slow start.
 4. Ease-out - Specifies a transition effect with a slow end.
 5. Ease-in-out - Specifies a transition effect with a slow start and a slow end.
 6. Cubic-bezier(n,n,n,n) - Cubic-bezier lets us define our own values in a cubic-bezier function. </pre>
 
 - The following example shows some of the different speed curves that can be used:
 ```html
 <html>
<head>
<style> 
div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s;
}
#div1 {transition-timing-function: linear;}
#div2 {transition-timing-function: ease;}
#div3 {transition-timing-function: ease-in;}
#div4 {transition-timing-function: ease-out;}
#div5 {transition-timing-function: ease-in-out;}
div:hover {
  width: 300px;
}
</style>
</head>
<body>
<h1>The transition-timing-function Property</h1>
<p>Hover over the div elements below, to see the different speed curves:</p>
<div id="div1">linear</div><br>
<div id="div2">ease</div><br>
<div id="div3">ease-in</div><br>
<div id="div4">ease-out</div><br>
<div id="div5">ease-in-out</div><br>
</body>
</html>
```

<br>

## Transition-delay Effect

- A delay for the transition effect is specified by the transition-delay property.
- The following example has a 1 second delay before starting:
```html
<html>
<head>
<style> 
div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 3s;
  transition-delay: 1s;
}
div:hover {
  width: 300px;
}
</style>
</head>
<body>
<h1>The transition-delay Property</h1>
<p>Hover over the div element below, to see the transition effect:</p>
<div></div>
<p><b>Note:</b> The transition effect has a 1 second delay before starting.</p>
</body>
</html>
```

<br>

## Transition + Transformation

- The following example adds a transition effect to the transformation:
```html
<html>
<head>
<style> 
div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s, height 2s, transform 2s;
}
div:hover {
  width: 300px;
  height: 300px;
  transform: rotate(180deg);
}
</style>
</head>
<body>
<h1>Transition + Transform</h1>
<p>Hover over the div element below:</p>
<div></div>
</body>
</html>
```

<br>

## Shorthand property transition

- The CSS transition properties can be specified one by one using this property.
```html
<html>
<head>
<style> 
div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s linear 1s;
}

div:hover {
  width: 300px;
}
</style>
</head>
<body>

<h1>Using The transition Shorthand Property</h1>

<p>Hover over the div element below, to see the transition effect:</p>

<div></div>

<p><b>Note:</b> The transition effect has a 1 second delay before starting.</p>

</body>
</html>
```

<br>

## CSS Transition Properties

<pre> 1. Transition - It is a shorthand property for setting the four transition properties into a single property.
 2. Transition-delay - It specifies a delay for the transition effect in seconds.
 3. Transition-duration - It specifies how many seconds or milliseconds a transition effect takes to complete.
 4. Transition-property - It specifies the name of the CSS property for which the transition effect is.
 5. Transition-timing-function - It specifies the speed curve of the transition effect. </pre>

