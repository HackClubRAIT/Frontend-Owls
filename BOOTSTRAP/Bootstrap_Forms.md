

# Bootstrap Forms:

Bootstrap’s form controls expand on our Rebooted form styles with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices.

 * <mark>install Bootstap before using these forms</mark>
```
npm install bootstrap
//OR
npm install bootstrap@latest
```

* <h5>some of the generally used forms:</h5>

    * Checkbox    
    * File
    * Input fields
    * Switch
    * Radio
    * Range
    * Validation

#### Checkbox
 Browser default checkboxes and radios are replaced with the help of .form-check, a series of classes for both input types that improves the layout and behavior of their HTML elements, that provide greater customization and cross browser consistency. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.
   * <h6> Basic example </h6>
   <img src = "https://github.com/vickyrules/userContents/blob/main/check.png" />

``` 
<!-- Default checkbox -->
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">Default checkbox</label>
</div>

<!-- Checked checkbox -->
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
  <label class="form-check-label" for="flexCheckChecked">Checked checkbox</label>
</div>
```

#### File
Bootstrap File upload / file input
File Input is a field which the user can use to upload one or more files (photos, documents or any other file type) from local storage.
* <h6> Basic example </h6>
 <img src = "https://github.com/vickyrules/userContents/blob/main/file.png" />

```
<label class="form-label" for="customFile">Default file input example</label>
<input type="file" class="form-control" id="customFile" />
```

#### Input fields 
Input field refer specifically to the text input fields, which are used to obtain data from the users.
* <h6> Basic example </h6>
   <img src = "https://github.com/vickyrules/userContents/blob/main/inputtext.png" />

```  
<div class="form-outline">
  <input type="text" id="form12" class="form-control" />
  <label class="form-label" for="form12">Example label</label>
</div>
```

#### Toggle Switch
A switch is a simple component used for activating one of two predefined options. Commonly used as an on/off button.

* <h6> Basic example </h6>
 <img src = "https://github.com/vickyrules/userContents/blob/main/ss.png" />

```
<!-- Default switch -->
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>

<!-- Checked switch -->
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
  <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
</div>

<!-- Default disabled switch -->
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled />
  <label class="form-check-label" for="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
</div>

<!-- Checked disabled switch -->
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" checked disabled />
  <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
</div>
```

#### Radio
A Radio Button is a component used to allow a user to make a single choice among a number of options (whereas Checkboxes are used for selecting multiple options).

* <h6> Basic example </h6>
  <img src = "https://github.com/vickyrules/userContents/blob/main/radio.png" />



```
<!-- Default radio -->
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1"> Default radio </label>
</div>

<!-- Default checked radio -->
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2"> Default checked radio </label>
</div>
```
#### Range
A Range is an interactive component that lets the user swiftly slide through possible values spread over the desired range.

* <h6> Basic example </h6>
 <img src = "https://github.com/vickyrules/userContents/blob/main/range.png" />

```
<label class="form-label" for="customRange1">Example range</label>
<div class="range">
  <input type="range" class="form-range" id="customRange1" />
</div>
```

#### Validation
Provide valuable, actionable feedback to your users with HTML5 form validation, via browser default behaviors or custom styles and JavaScript.

* <h6> Basic example </h6>
   <img src = "https://github.com/vickyrules/userContents/blob/main/validation.png" />
   
 ```
 <form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4">
    <div class="form-outline">
      <input type="text" class="form-control" id="validationCustom01" value="Mark" required />
      <label for="validationCustom01" class="form-label">First name</label>
      <div class="valid-feedback">Looks good!</div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="form-outline">
      <input type="text" class="form-control" id="validationCustom02" value="Otto" required />
      <label for="validationCustom02" class="form-label">Last name</label>
      <div class="valid-feedback">Looks good!</div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="input-group form-outline">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
      <label for="validationCustomUsername" class="form-label">Username</label>
      <div class="invalid-feedback">Please choose a username.</div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="form-outline">
      <input type="text" class="form-control" id="validationCustom03" required />
      <label for="validationCustom03" class="form-label">City</label>
      <div class="invalid-feedback">Please provide a valid city.</div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="form-outline">
      <input type="text" class="form-control" id="validationCustom05" required />
      <label for="validationCustom05" class="form-label">Zip</label>
      <div class="invalid-feedback">Please provide a valid zip.</div>
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
      <label class="form-check-label" for="invalidCheck">Agree to terms and conditions</label>
      <div class="invalid-feedback">You must agree before submitting.</div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
```

## Additional Examples:
* Login Form

   <img src = "https://github.com/vickyrules/userContents/blob/main/ligin.png" />
   
   
  ```
  <form>
  <!-- Email input -->
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control" />
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  <!-- Password input -->
  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" />
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  <!-- 2 column grid layout for inline styling -->
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      <!-- Checkbox -->
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example34" checked />
        <label class="form-check-label" for="form2Example34"> Remember me </label>
      </div>
    </div>

    <div class="col">
      <!-- Simple link -->
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  <!-- Submit button -->
  <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

  <!-- Register buttons -->
  <div class="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    <p>or sign up with:</p>
    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
  </div>
</form>

* Checkout form
  <img src="https://github.com/vickyrules/userContents/blob/main/checkout.png" >
 
 ``` <form>
  <!-- 2 column grid layout with text inputs for the first and last names -->
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form6Example1" class="form-control" />
        <label class="form-label" for="form6Example1">First name</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form6Example2" class="form-control" />
        <label class="form-label" for="form6Example2">Last name</label>
      </div>
    </div>
  </div>

  <!-- Text input -->
  <div class="form-outline mb-4">
    <input type="text" id="form6Example3" class="form-control" />
    <label class="form-label" for="form6Example3">Company name</label>
  </div>

  <!-- Text input -->
  <div class="form-outline mb-4">
    <input type="text" id="form6Example4" class="form-control" />
    <label class="form-label" for="form6Example4">Address</label>
  </div>

  <!-- Email input -->
  <div class="form-outline mb-4">
    <input type="email" id="form6Example5" class="form-control" />
    <label class="form-label" for="form6Example5">Email</label>
  </div>

  <!-- Number input -->
  <div class="form-outline mb-4">
    <input type="number" id="form6Example6" class="form-control" />
    <label class="form-label" for="form6Example6">Phone</label>
  </div>

  <!-- Message input -->
  <div class="form-outline mb-4">
    <textarea class="form-control" id="form6Example7" rows="4"></textarea>
    <label class="form-label" for="form6Example7">Additional information</label>
  </div>

  <!-- Checkbox -->
  <div class="form-check d-flex justify-content-center mb-4">
    <input class="form-check-input me-2" type="checkbox" value="" id="form6Example8" checked />
    <label class="form-check-label" for="form6Example8"> Create an account? </label>
  </div>

  <!-- Submit button -->
  <button type="submit" class="btn btn-primary btn-block mb-4">Place order</button>
</form>
``` 

  
