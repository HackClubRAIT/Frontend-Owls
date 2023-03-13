## HTML favicon

### What is a favicon :
An emblem used to designate a website or blog is contained in a tiny file called a favicon. It is sometimes referred to as a bookmark icon, webpage icon, or tab icon.

The address bar, browser tab, browser history, bookmark bar, etc. all display this icon. A favicon's image is in.ico file format. Although there are many different file types, all browsers support the.ico format.

### How to Create a Favicon :
The steps for making the favicon are as follows:

1. To create the favicon, click on the following URL: https://www.favicon.cc/.

2. By selecting the download favicon option after the favicon has been successfully created, we may download the favicon.

3. A favicon with the filename favicon.ico is now available in the file system disk after downloading.

### How To Add a Favicon in HTML :
1. Save your favicon image to the root directory of your webserver or create a folder called images in the root directory and save your favicon image there to add a favicon to your website.

2. A favicon image is known by the filename "favicon.ico".

3. After the ```<title>``` element in your "index.html" file, add a ```<link>``` element.

### Example :

```html
<!DOCTYPE html>
<html>
<head>
  <title>This is my page</title>
  <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
</head>
<body>

<h1>This is my Heading1</h1>
<h2>This is my Heading2</h2>
<p>This is my paragraph.</p>

</body>
</html>
```

### Output :

![image](https://user-images.githubusercontent.com/75573569/181870346-f19f9f5e-a28a-46c3-a533-a792dc49aa09.png)
