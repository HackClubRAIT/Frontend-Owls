
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
- Example: `<input type="text" id="fullName" name="fullName">`
- To give the final submit button at the end of form we use same input element and set the type of input to submit as shown: `<input type="submit" value="Submit">`.
- To read more about input, you can read it [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).
