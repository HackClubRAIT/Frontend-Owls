
# HTML Text-area

This element can be seen as a multi-line text input in HTML pages.

- It is generally used when user needs to **submit long text** like  post's description, comments, feedbacks, reviews.
- You must have a question that Why this element is used specifically? So the answer to that question is **text area can hold an unlimited number of characters** which is useful whenever the number of words are not definite and unknown.
- Also it is **resizeable in UI**, so that user can see the text typed properly and recheck it.
- To define the **size** of it in UI, we need to use attribute `<cols>` and `<rows>` as showm in example.
### Example usage:

```
<label for="about">Tell me about you:</label>

<textarea id="about" name="about"
          rows="5" cols="33">
My name is ...
</textarea>
```

- The `<textarea>` element also take some of the attributes which we also use in forms like `<input>`s, such as `autocomplete`, `autofocus`, `disabled`, `placeholder`, `readonly`, and `required`.
- `<textarea>` does not support the value attribute.
- To read more about HTML text-area in detail then you can check it [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).
