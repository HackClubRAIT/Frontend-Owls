# CSS IMAGE STYLING
There are many ways to set style in images which are listed below:

● Thumbnail Images <br>
● Rounded Images <br>
● Responsive Images <br>
● Transparent Image <br>
● Center an Image <br>

# Thumbnail Images
The border property is used to create thumbnail images.

```html
<!DOCTYPE html>
<html>
<head>
	<title>Thumbnail image</title>
	<style>
	img {
		border: 1px solid black;
		border-radius: 5px;
		padding: 5px;
	}
	</style>
</head>

<body>
<img src=
"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F3458147.jpg&imgrefurl=https%3A%2F%2Fwallpaperaccess.com%2Fthumbnail&tbnid=dPbi6jnCbkXAmM&vet=12ahUKEwjXpr_h5rf5AhUngtgFHfDRAa0QMygJegUIARD1AQ..i&docid=lMb-WcYy4O1NQM&w=3584&h=2240&q=thumbnail%20images&ved=2ahUKEwjXpr_h5rf5AhUngtgFHfDRAa0QMygJegUIARD1AQ"
	alt="thumbnail-image"
	style="width:400px">
</body>
</html>
```

# Rounded Images
The border-radius property is used to set the radius of border-image. This property can contain one, two, three, or four values. 
It is the combination of four properties: border-top-left-radius, border-top-right-radius, border-bottom-left-radius, border-bottom-right-radius.

```html
<!DOCTYPE html>
<html>
<head>
	<style>
	img {
		border-radius: 50%;
	}
	</style>
</head>

<body>
	<img src=
"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F09%2F10%2F14%2F50%2Fgradient-934519__480.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fthumbnail%2F&tbnid=5HEmOKi6o9fIJM&vet=12ahUKEwjXpr_h5rf5AhUngtgFHfDRAa0QMygOegUIARCAAg..i&docid=6AeHlSOpVMgZ8M&w=691&h=480&q=thumbnail%20images&ved=2ahUKEwjXpr_h5rf5AhUngtgFHfDRAa0QMygOegUIARCAAg"
		alt="rounded-image"
		width="400"
		height="400">
</body>
</html>
```

# Responsive Images
The responsive image is used to adjust the image automatically to the specified box.

```html
<!DOCTYPE html>
<html>
<head>
	<style>
	img {
		max-width: 100%;
		height: auto;
	}
	</style>
</head>

<body>
	<img src=
"https://www.google.com/imgres?imgurl=https%3A%2F%2Ffile.pngbackground.com%2Fuploads%2Fpreview%2Fgaming-youtube-thumbnail-background-full-hd-116264029530uvpzthxsn.jpg&imgrefurl=https%3A%2F%2Fpngbackground.com%2Fphoto%2F2175%2Fgaming-youtube-thumbnail-background-full-hd&tbnid=W62M1mB2t-sB5M&vet=12ahUKEwjXpr_h5rf5AhUngtgFHfDRAa0QMygQegUIARCEAg..i&docid=5zma8oPuLv7R2M&w=850&h=478&q=thumbnail%20images&ved=2ahUKEwjXpr_h5rf5AhUngtgFHfDRAa0QMygQegUIARCEAg"
		alt="Responsive-image"
		width="1000"
		height="300">
</body>
</html>
```

# Transparent Images
The opacity property is used to set the image transparent. The opacity value lies between 0.0 to 1.0.

```html
<!DOCTYPE html>
<html>
<head>
	<title>style image</title>
	<style>
	img {
		opacity: 0.5;
	}
	</style>
</head>

<body>
	<img src=
"https://www.google.com/imgres?imgurl=https%3A%2F%2Ftoppng.com%2Fuploads%2Fpreview%2Fthumbnail-effect-black-background-11563878112yn6okdl48w.jpg&imgrefurl=https%3A%2F%2Ftoppng.com%2Ffree-image%2Fthumbnail-effect-black-hd-background-PNG-free-PNG-Images_322017&tbnid=wtzf-rEun9My2M&vet=12ahUKEwjXpr_h5rf5AhUngtgFHfDRAa0QMygiegUIARCuAg..i&docid=XiQ442IQqD6t6M&w=850&h=479&q=thumbnail%20images&ved=2ahUKEwjXpr_h5rf5AhUngtgFHfDRAa0QMygiegUIARCuAg"
		alt="Transparent-image"
		width="100%">
</body>
</html>
```

# Center an Image
The images can be centered to box by using left-margin and right-margin properties.

```html
<!DOCTYPE html>
<html>
<head>
	<title>style image</title>
	<style>
	img {
		display: block;
		margin-left: auto;
		margin-right: auto;
	}
	</style>
</head>

<body>
<img src=
"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp5952042.jpg&imgrefurl=https%3A%2F%2Fwallpapercave.com%2Fyoutube-thumbnails-wallpapers&tbnid=g0HcmxCwj3fBHM&vet=12ahUKEwjXpr_h5rf5AhUngtgFHfDRAa0QMygfegUIARCoAg..i&docid=Khk6VIt29T5vBM&w=1920&h=1080&q=thumbnail%20images&ved=2ahUKEwjXpr_h5rf5AhUngtgFHfDRAa0QMygfegUIARCoAg"
	alt="centered-image"
	style="width:50%">
</body>
</html>
```
