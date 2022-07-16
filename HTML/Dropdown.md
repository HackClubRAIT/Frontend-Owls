**HTML DROPDOWN**

Dropdown is an integral part in forms, navbar of website, etc. It lets us choose an option among the few provided by clicking on the dropdown icon. Dropdown menus must be accessible so that these users can browse your site, submit forms, and perform other actions.

Tags used in drop down code

- select : to create dropdown list with multiple options
- option : to display available option values

Here, I have created a sample dropdown which allows you to select your favourite coding language.

```html
<select>
    <option value="select">Select your favourite coding language</option>
    <option value="C++">C++</option>
    <option value="Python">Python</option>
    <option value="Java">Java</option>
</select>
```
**Output of this code**

https://user-images.githubusercontent.com/98261167/179349847-9b4d1bd7-aaea-4860-bfc2-29a82ab688c9.mp4

**Tips for a dropdown menu**
- Avoid putting too many elements in a dropdown.
- Use a container element like div to create the dropdown menu and add the dropdown links inside it.
  ```html
  <div class="dropdown">
  <button class="dropbtn">Dropdown Button</button>
  <div class="dropdown-content">
    <a href="#">Link I</a>
    <a href="#">Link II</a>
    <a href="#">Link III</a>
    <a href="#">Link IV</a>
  </div>
</div>
  ````
  
