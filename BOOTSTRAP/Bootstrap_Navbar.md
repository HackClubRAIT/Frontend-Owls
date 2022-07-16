# Bootstrap Navbar

Here we will be learning about the bootstrap navbar as well as customizing with various classes extracted from the Bootstrap 5.0
<br><br>

## So, what is a " Navbar " ?

In simple words, a navigation bar is a user interface element within a webpage that contains links to other sections of the website. In most cases, the navigation bar is part of the main website template, which means it is displayed on most, if not all, pages within the website. <br>This means that no matter what page you are viewing, you can use the navigation bar to visit other sections of the website.

<br>

## Types of Navbar :

- Horizontal (Displayed at the top of each page)
- Vertical (Sidebar appears from any of the side)

<br><br>

## Make a Navbar :

Okay now we know what is a navbar and how it looks. So now let us try to build one and see how it functions and then customize it further. <br>
Previously we would need to make a Navbar from scratch and as a result it was time consuming so we generally use something known as [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/). <br><br>

The steps to make the `Navbar` is easy enough, just follow through :

- Go to the `head` of the `index.html` and paste the [Bootstrap CDN](https://getbootstrap.com/docs/5.0/getting-started/introduction/).
- Then go to your code and make a `Section` in the code (at the top) to place the Navbar's code.<br>
- Copy this code and paste it in the section : <br>
- ```<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  ```

- With this done you are Good to go !! That's all.

<br><br>

### By default it will be looking like this :

<br>

![navbar](https://user-images.githubusercontent.com/72851613/135644641-a59570a8-e99f-4bdc-9c86-2c1726a19014.png)

<br>
Don't worry we will be talking about all the properties and customizing it next.

<br>

---

<br>

## Properties of the Navbar :

Now that we have sucessfully made a `navbar` it is time that we look into the navbar and understand all of it's properties and components which it uses to provide the default look and feel.
<br><br>

### Brand

The `.navbar-brand` can be applied to most elements, but an anchor works best, as some elements might require utility classes or custom styles. It is used to represent any type of Brand Name that you might want to display in your site. You can also replace the `.navbar-brand` with an Image.

<br>

### Nav

Navbar navigation links build on our `.nav` options with their own modifier class and require the use of toggler classes for proper responsive styling. Remember that Navigation in navbars will also grow to occupy as much horizontal space as possible to keep your navbar contents securely aligned.

To add the current page use `.active` class on the `.nav-link`.
Please note that you should also add the `aria-current` attribute on the active `.nav-link`.

<br>

### Forms

You can place a `form` inside your Navbar. It can be like a search bar too. Remember that immediate child elements of `.navbar` use flex layout and will default to `justify-content: space-between`.

<br>

### Buttons

If a search bar is added in the `navbar` we can generally add a button inside the navbar so that upon clicking we can search for the desired content.

<br>

### Dropdown

We can also use `dropdown` in the `.nav-item` which can be toggeled and inside the dropdown many we can place details such as login, logout, profile and so on.

<br>

---

<br>

## Customization :

Now that we have learnt about the `navbar` in details it is time that we look at the different properties that can be used during the customization
<br><br>

## Color schemes

Theming the navbar has never been easier thanks to the combination of theming classes and background-color utilities. We can choose either a dark or a light navbar. <br>

- To use a dark `navbar` we will use : `.navbar-dark` for dark background colors.
- And if you prefer a light `navbar` use : `.navbar-light` for use with light background colors.

This can be further customized with the help of `.bg-\*` utilities. Examples : `bg-primary`.

<br>

## Containers

Although it’s not required, you can still wrap a `navbar` in a `.container` to center it on a page–though note that an inner container is still required. Alternatively you can add a container inside the `.navbar` to only center the contents of a fixed or static top navbar.

<br>

## Placement

Placement of a `navbar` is one of the most important properties that can be used during customization. <br>

We can use different position utilites to customize the position :

- `<div class="position-static">...</div>`
- `<div class="position-relative">...</div>`
- `<div class="position-absolute">...</div>`
- `<div class="position-fixed">...</div>`
- `<div class="position-sticky">...</div>`

`Static` and `fixed` is used to keep the navbar where it is through out. `Absolute` and `relative` are used to change the position as needed via CSS.

Also note that `position-sticky`, keep the navbar in one single place wwhich isn’t fully supported in every browser.

<br>

## Scrolling

Add `.navbar-nav-scroll` to a `.navbar-nav` (or other navbar sub-component) to enable vertical scrolling within the toggleable contents of a collapsed navbar. By default, scrolling kicks in at 75vh (or 75% of the viewport height), but you can override that with the local CSS custom property `--bs-navbar-height` or custom styles.

Please note that this behavior comes with a potential drawback of overflow—when setting `overflow-y: auto` (required to scroll the content here), `overflow-x` is the equivalent of auto, which will crop some horizontal content.

<br>

## Responsive behaviors

Navbars can use `.navbar-toggler` , `.navbar-collapse`, and `.navbar-expand{-sm|-md|-lg|-xl|-xxl}` classes to determine when their content collapses behind a button.

For navbars that never collapse, we can add the `.navbar-expand` class on the navbar. For navbars that always collapse, don’t add any `.navbar-expand` class.

<br>

---

<br>

## Conclusion

We have sucessfully created a navbar, took a look at all of it's properties and played around with the customization.

<br>

Make sure to give [Frontend-Owls](https://github.com/HackClubRAIT/Frontend-Owls) a ⭐and keep contributing to other projects.

Author : [Tamal](https://github.com/IAmTamal)

<br>

