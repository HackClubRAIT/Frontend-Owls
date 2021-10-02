# CSS Box Model

## What is CSS box model?

CSS Box Model is a concept in which each element on a web page acts as a box. Starting from paragraphs, headers, forms, images, logos to videos, web browsers actually display them as 'boxes'.

Like a 'box', each of these HTML elements consists of 4 layers, namely: content, padding, border and margin. These four 'layers' make up the CSS Box Model.

<img  src="https://www.duniailkom.com/wp-content/uploads/2014/04/CSS-Box-Model.png"  width="450"  height="300"  align="center"/>

### Content

Content is the content of the elements we use. For example, with paragraph elements we write text, then the text is the content. With the image <img> element, we add an image, then the image is the content

### Padding

Is the space (space) around the content. Padding is transparent. And we can only determine the width

### Border

Borders are “boundaries” that surround the content and padding areas. Previously I have written about background and border explanations

### Margin

Margins can be used to set the area (space) outside the element

#### Example usage:

```

div {
	width: 300px;
	height: 50px;
	padding: 15px;
	border: 3px solid salmon;
	margin: 20px;
	background-color: aqua;
}

```

<img  src="https://i.ibb.co/ZTcm1GY/output-css-box-model.jpg"  width="350"  height="300"  align="center"/>

To read more about other example, you can refer to

- https://www.w3schools.com/css/css_boxmodel.asp.
- https://css-tricks.com/the-css-box-model/
