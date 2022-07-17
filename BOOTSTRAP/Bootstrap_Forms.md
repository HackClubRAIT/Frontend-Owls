# Bootstrap Forms:
Bootstrap’s form controls expand on our Rebooted form styles with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices.

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
  <label class="form-label" for="customFile">Default file input example</label>
  <input type="file" class="form-control" id="customFile" />

```
<label class="form-label" for="customFile">Default file input example</label>
<input type="file" class="form-control" id="customFile" />
```

#### Input fields 
Input field refer specifically to the text input fields, which are used to obtain data from the users.
* <h6> Basic example </h6>
  <div class="form-outline">
  <input type="text" id="form12" class="form-control" />
  <label class="form-label" for="form12">Example label</label>
</div>

```
<div class="form-outline">
  <input type="text" id="form12" class="form-control" />
  <label class="form-label" for="form12">Example label</label>
</div>
```

####Toggle Switch
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
<label class="form-label" for="customRange1">Example range</label>
<div class="range">
  <input type="range" class="form-range" id="customRange1" />
</div>

```
<label class="form-label" for="customRange1">Example range</label>
<div class="range">
  <input type="range" class="form-range" id="customRange1" />
</div>
```



* * <h6> Basic example </h6>




  