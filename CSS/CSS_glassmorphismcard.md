#### Note: Kindly refer to HTML_glassmorphismcard.md for the HTML code of this file.

# CSS styles for Glassmorphism

## Basic Setup
Let us setup some basic css styles in body tag:

```
body {
  padding: 4.5rem;            //gives spacing around the component
  margin: 0;                  //a zero length margin is created
  background: #edc0bf;        //background color is set to the given color
  background: linear-gradient(90deg, #E1A2B8 0, #6F00ED 58%);    //a gradient is provided in the background
  font-family: 'Inter', sans-serif;                              //font type is specified
}

```
Now we need to adjust the components according to our design so we are going to specify some basic spacing and sizes of different components after which we can try making the glass effect.

```
.card {
  width: 400px;
  height: auto;
  padding: 2rem;
  border-radius: 1rem;
}

.card-title {
  margin-top: 0;
  margin-bottom: .5rem;
  font-size: 1.2rem;
}

p, a {
  font-size: 1rem;
}

a {
  color: #4d4ae8;
  text-decoration: none;
}

```
## The glassmorphism effect
You only need two important CSS properties to apply the effect: 
<pre>a transparent background 
the backdrop-filter: blur(10px); property.</pre>
The amount of blur or transparency can be changed based on your needs.

Add the following styles to the .card element:

```
.card {
	/* other styles */
	background: rgba(255, 255, 255, .7);
	-webkit-backdrop-filter: blur(10px);
	backdrop-filter: blur(10px);
}

```
Add the following styles to the .shape element:

```
.shape {
  position: absolute;
  width: 150px;
  top: 0.5rem;
  left: 0.5rem;
}

```
#### Things to note: 
Internet Explorer does not support the backdrop-filter property, and Firefox has it disabled by default.
Other than that, all major browsers support the properties necessary to create the glassmorphism effect.