# CSS Gradients

- CSS Gradients displays the smooth transistion when we specify two or more colors.

<br>

## Types of Gradients

<pre> 1. Linear Gradient
2. Radial Gradient
3. Conical Gradient </pre>

<br>

## Linear Gradient

- linear-gradient() forms an image as output which consists of transition between 2 or more colors along a straight line.
- You can also specify a direction(or angle) along with the colors , but direction is optional.

- Following example can be use to get better picture of linear gradient
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Gradients</title>
    <style>
        .gradient {
            display: flex;
            flex-direction: row;
        }
        .prop{
            margin: 5px 15px;
            width: 200px;
            height: 200px;
            border-radius: 50%; 
        }
        .grad-1{
            background-image: linear-gradient(red,yellow,pink,blue,cyan);
        }
        .grad-2{
            /* background-image: linear-gradient(180deg,cyan,green);   */
            background-image: linear-gradient(to right,cyan,green);  
            /*  can specify direction or angle */
        }
        .grad-3{
            background-image: repeating-linear-gradient(100deg,blue 20%,pink 40%);
        }
    </style>
  </head>
  <body>
    <div class="gradient">
      <div class="prop grad-1"></div>
      <div class="prop grad-2"></div>
      <div class="prop grad-3"></div>
    </div>
  </body>
</html>
```

<br>

## Radial Gradient

- radial-gradient() forms an image as output which consists of transition between 2 or more colors that starts from center.
- Syntax: background-image: radial-gradient(shape size at position, start-color, ..., last-color);
<pre>1. shape can be cirlce or ellipse(default)
2.size can be farthest-corner (default), closest-side, closest-corner, farthest-side
3. position of the gradient,default is "center"
</pre>

- Following example can be use to get better picture of radial gradient
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Gradients</title>
    <style>
        .gradient {
            display: flex;
            flex-direction: row;
        }
        .prop{
            margin: 5px 15px;
            width: 200px;
            height: 200px;
            border-radius: 50%; 
        }
        .grad-1{
            background-image: radial-gradient(red,yellow,pink,blue,cyan);
        }
        .grad-2{
            background-image: radial-gradient(closest-side, pink,cyan,yellow);  
        }
        .grad-3{
            background-image: repeating-radial-gradient(red, pink,cyan,yellow);
        }
    </style>
  </head>
  <body>
    <div class="gradient">
      <div class="prop grad-1"></div>
      <div class="prop grad-2"></div>
      <div class="prop grad-3"></div>
    </div>
  </body>
</html>
```

<br>

## Conic Gradient

- conic-gradient() forms an image as output which consists of transition between 2 or more colors that are rotated around center point.
- Syntax: background-image: conic-gradient([from angle] [at position,] color [degree], color [degree], ...);
- by default colors spread about center point , if deg is not specified.

- Following example can be use to get better picture of conic gradient
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Gradients</title>
    <style>
        .gradient {
            display: flex;
            flex-direction: row;
        }
        .prop{
            margin: 5px 15px;
            width: 200px;
            height: 200px;
            border-radius: 50%; 
        }
        .grad-1{
            background-image: conic-gradient(red,yellow,pink,blue,cyan);
        }
        .grad-2{
            background-image: conic-gradient( pink 40deg,cyan 70deg,yellow 190deg);  
        }
        .grad-3{
            background-image: repeating-conic-gradient(cyan 10%, yellow 20%);
        }
    </style>
  </head>
  <body>
    <div class="gradient">
      <div class="prop grad-1"></div>
      <div class="prop grad-2"></div>
      <div class="prop grad-3"></div>
    </div>
  </body>
</html>
```




