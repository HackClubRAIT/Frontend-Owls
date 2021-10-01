
# HTML Forms

Form is the tag/element present in the HTML represents a document section containing interactive controls which functions as the way to collect entered and submit it.

- It creates a HTML form to submit user input.
- In order to add elements in form we need to write the required code inside these tags `<form></form>`.
- To attach that form with a backend script or program we use `method` attribute inside form element. 
#### Example usage:

```
<form action="/save_data.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>
```
Above example shows a simple form which has two input fields with the respective labels.

#### Elements used in HTML Forms:

Label
- `<label>` tag defines a label for many form elements.
- It represents a caption for an item in a user interface.
- It helps user to identify which information one should fill in the `<input>` label next.
- The `for` attribute of the `<label>` tag should be equal to the id attribute of the `<input>` element to bind them together.
- Example: `<label for="fullName"> Full Name:</label>`
- To read more about labels, you can read it [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label).

Input
- `<input>`element is the most used element in the form.
- We use it take input from the user in many forms depending on the `<type>` attribute.
- It's always recommended to write `label` for the respective input.
- Example: `<input type="text" id="fullName" name="fullName">`.
- Following are the `types` of input which we can use:
```<input type="button">
<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number">
<input type="password">
<input type="radio">
<input type="range">
<input type="search">
<input type="tel">
<input type="text">
<input type="time">
<input type="url">
<input type="week">
```
- Below two `input type` functions more like button:
  - `<input type="reset">` will be visible as reset button on HTML and it resets the contents of the form to default values
  - `<input type="submit">` will be visible as submit button on HTML and submits the form.
- If we don't mention any input then by default it would be considered as `text` and will be visible as textfield in html
- To give the final submit button at the end of form we use same input element and set the type of input to submit as shown: `<input type="submit" value="Submit">`.
- To read more about input in detail, you can refer to [this](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).
