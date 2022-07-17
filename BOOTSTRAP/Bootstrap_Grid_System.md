## Bootstrap Grid System

The Bootstrap Grid System is used for layout, specifically Responsive Layouts. Understanding how it works is vital to understanding Bootstrap. The Grid is made up of groupings of Rows & Columns inside 1 or more Containers.

## The rules of Grid

<li>Columns must be the immediate child of a Row.
<li>Rows are only used to contain Columns, nothing else.
<li>Rows should be placed inside a Container.

## Here’s the most basic example of using the Grid:

``` 

<div class="container"> 
   <div class="row"> 
      <div class="col">I'm your content inside the grid!</div> 
   </div> 
</div>

```

## The classic Bootstrap grid has 12 column units:

Lets consider this image 

<img  src="https://miro.medium.com/max/1400/1*N-JAC1TBpItJb1XLVBKZNw.png"  width="350"  height="300"  align="center"/>

Here you can understand how grid column occupies the space.

## Grid Classes

The Bootstrap grid system has four classes:

<li>xs (for phones - screens less than 768px wide)
<li>sm (for tablets - screens equal to or greater than 768px wide)
<li>md (for small laptops - screens equal to or greater than 992px wide)
<li>lg (for laptops and desktops - screens equal to or greater than 1200px wide)
The classes above can be combined to create more dynamic and flexible layouts.

## How to make Grid Responsive with Bootstrap.

All I can say is It’s all about width.

## For example: here are 2 columns, each 50% width:

```

<div class="container"> 
   <div class="row"> 
      <div class="col-sm-6">Column 1</div>
      <div class="col-sm-6">Column 2</div> 
   </div> 
</div>

```
The col-sm-6 means use 6 of 12 columns wide (50%), on a typical small device width (greater than or equal to 768 px)

## 3 equal-width columns (responsive)

In this example, the cols remain horizontal until the sm breakpoint of 576px, and then stack vertically. Remember, you can switch out sm for whatever breakpoint (md,lg,xl) is needed:

```

<div class="container"> 
   <div class="row"> 
      <div class="col-sm">1</div>
      <div class="col-sm">2</div> 
      <div class="col-sm">3</div>
   </div> 
</div>

```

To read more about other example, you can refer to

- https://getbootstrap.com/docs/5.0/layout/grid/