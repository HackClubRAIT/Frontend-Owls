
# HTML Text-area

This element represents a multi-line text input control.

- It is generally used when user needs to **submit long text** like comments, feedbacks, reviews, posts.
- You must have a question that Why this element is used specifically? So the answer to that question is **text area can hold an unlimited number of characters, and the text renders in a fixed-width font** (usually Courier).
- Also it is **resizeable in UI**, so that user can see the text typed properly.
- To define the **size** of it, we need to give values to `<cols>` and `<rows>` as demonstrated in example.
### Example usage:

```
<label for="story">Tell us your story:</label>

<textarea id="story" name="story"
          rows="5" cols="33">
It was a dark and stormy night...
</textarea>
```

- The `<textarea>` element also accepts several attributes common to form `<input>`s, such as `autocomplete`, `autofocus`, `disabled`, `placeholder`, `readonly`, and `required`.
- `<textarea>` does not support the value attribute.
- To read more about HTML text-area in detail then you can check it [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).
