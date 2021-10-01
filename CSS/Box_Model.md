# CSS Box Model

## What is CSS box model?

The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. The image below illustrates the box model:

<img src="https://i1.wp.com/mangcoding.com/wp-content/uploads/2017/03/CSS-Box-Model.png?fit=630%2C411&ssl=1" width="450" height="300" align="center"/>

Explanation of the different parts:

- **Content** - The content of the box, where text and images appear
- **Padding** - Clears an area around the content. The padding is transparent
- **Border** - A border that goes around the padding and content
- **Margin** - Clears an area outside the border. The margin is transparent

The box model allows us to add a border around elements, and to define space between elements.

#### Example usage:

This div element will have a total width of 350px:

```
div {
	width: 320px;
	padding: 10px;
	border: 5px solid gray;
	margin: 0;
}
```

Here is the calculation:

```
320px (width)
+ 20px (left + right padding)
+ 10px (left + right border)
+ 0px (left + right margin)
**= 350px**
```

- To read more about other example, you can refer to [this](https://www.w3schools.com/css/css_boxmodel.asp).
