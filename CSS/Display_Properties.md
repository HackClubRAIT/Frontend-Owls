# Display Properties in CSS
The `display` property allows you to manipulate the looks of a HTML element.

## How does the display property work?
The value of the display property can be classified into two types.
| Type | Description |
| ----------- | ----------- |
| block level | takes up the entire space |
| inline level | doesn't take up the entire space |

Lets have a look at some of the commonly used values of display properties.

- `display: block`
- `display: inline`
- `display: inline-block`
- `display: flex`
- `display: grid`
- `display: none`
- `display: inherit`
- `display: table`

<br>

## `display: block`
The element that has its display property set to block will take up the remaining screen's width. Some examples of block level elements are `<div>`, `<section>`, and so on. You can also specify properties like height and width to block level elements.

![block](https://i.imgur.com/xSAZaR5.png) 

<br>



## `display: inline`
The element with the display property set to inline will not take up the remaining width of the screen like block level elements do, rather they take up the space that they need. You can't set the height and width for inline elements. Some examples of inline elements are `<span>`, `<a>` and so on.

![inline](https://i.imgur.com/Txz7vYg.png) 

<br>

## `display: inline-block`
The element that has its display property set to inline-block has an added advantage. These elements can behave as both inline and block level elements because you can manipulate their height and width despite having the properties of inline elements.

![inline-block](https://i.imgur.com/uTHXUIG.png) 

<br>

## `display: flex`
The element with its display property set to flex can have access to flexbox properties like `align-items`, `justify-content` and so on.

![flex](https://i.imgur.com/1B4dw2f.png) 

<br>

## `display: grid`
The element with its display property set to grid can access the properties of grid like `place-items`, `grid-template` and so on. Grid is basically an advanced version of flexbox.

![grid](https://i.imgur.com/y2F19TC.png) 

<br>

## `display: none`
When an element's display property is set to none, the element is completely removed from the document. In simple word we will not be able to see the element any more because it doesn't exist anymore.

![none](https://i.imgur.com/VOKK9iE.png) 

<br>

## `display: inherit`
The element that has it's display property set to inherit will inherit the display property of its parent.

![inherit](https://i.imgur.com/j440o8b.png) 

<br>

## `display: table`
This display value of table is rarely used nowadays, but its important to know it served as the foundation for flexbox and grid.
Setting display to table makes the element behave like a table. So you can make a copy of an HTML table without using the table element.
![table](https://i.imgur.com/92dKUlI.png) 

<br>