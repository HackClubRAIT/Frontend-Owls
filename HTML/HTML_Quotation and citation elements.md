# HTML QUOTATION AND CITATION ELEMENTS

1. HTML `<blockquote>` ELement

<br>

- The HTML `<blockquote>` element is basically used when we have to indicate quotation for a large section of text which is taken from another source.

  <br>
  
EXAMPLE:
 
```html
<html>
<body>
<p>blockquote element</p>
<blockquote cite="https://hacktoberfest.digitalocean.com/">
Hacktoberfest is a monthlong celebration of open source. 
</blockquote>
</body>
</html>
```
 
 <br>
 
2. HTML `<q>` tag

<br>

- HTML `<q>` tag is used to define a short quatation. Quotation marks are normally inserted around the quotation in browsers.
  
  <br>
  
EXAMPLE:
  
```html
<html>
<body>
<p>q element</p>
<p>Hacktoberfest <q>is a month long celebration of open source. </q></p>
</body>
</html>
```

<br>

3. HTML `<abbr>` tag

 <br>

- HTML `<abbr>` tag is used to define an acronym or an abbrevation like "PHP" ,"TTYL", etc.

 <br>
  
EXAMPLE:
 
```html
<html>
<body>
<p>The <abbr title="World Wide Web">WWW</abbr> was founded in 1991.</p>
<p>WWW is called as World Wide Web.</p>
</body>
</html>
```

<br>

4. HTML `<address>` ELement

<br>

- The HTML `<address>` tag is basically used to define the contact information for the author or owner of an article or a document.

  <br>
  
EXAMPLE:
 
```html
<html>
<body>
<p>The HTML address element</p>
<address>
Written by Charles David.<br> 
Visit us at:<br>
sample.com<br>
Street No.24<br>
USA
</address>
</body>
</html>

```
 
 <br>

5. HTML `<cite>` ELement

<br>

- The HTML `<cite>` tag is basically used to define the title of a creative work. (e.g. Book, Song, Poem, Movie, etc.)

  <br>
  
EXAMPLE:
 
```html
<html>
<body>
<p>The HTML cite element</p>
<p>Cite elements are displayed in italic by browsers.</p>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg" width="250" height="280" alt="Monalisa">
<p><cite>Monalisa</cite> by Leonardo da Vinci</p>
</body>
</html>

```

<br>

6. HTML `<bdo>` ELement

<br>

- BDO stands for Bi-Directional Override.
- The HTML `<bdo>` tag is used for overriding the direction of the current text.

  <br>
  
EXAMPLE:
 
```html
<html>
<body>
<p>If your browser supports bdo, next line will be written from right to left (rtl):</p>
<bdo dir="rtl">This line will be written from right to left</bdo>
</body>
</html>

```
 
 <br>
 
 # Exercise:
 
 <br>
 
 Question:
 
 <br>
 
 Use an HTML element to add quotation marks around the letters "cool".

<p>
I am so _____ cool _____ .
</p>
 
 <br>
 
 Solution:
 
 <br>
 
```html  
<p>
I am so <q> cool </q>.
</p>  

```
