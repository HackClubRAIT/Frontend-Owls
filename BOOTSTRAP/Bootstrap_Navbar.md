# Bootstrap Navbar

<br>

## So what is a Navbar ?

A navigation bar (or navigation system) is a section of a graphical user interface intended to aid visitors in accessing information. Navigation bars are implemented in file browsers, web browsers and as a design element of some web sites.

<br>

## How will we be making one ?

This time instead of using vanilla css we will be using the popular front-end framework for CSS known as Bootstrap.

<br><br>

## How it works :

### Here’s what you need to know before getting started with the navbar:

<br>

- Navbars require a wrapping .navbar with .navbar-expand{-sm|-md|-lg|-xl|-xxl} for responsive collapsing and color scheme classes.

- Navbars and their contents are fluid by default. Change the container to limit their horizontal width in different ways.
- Use our spacing and flex utility classes for controlling spacing and alignment within navbars.
- Navbars are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.
- Ensure accessibility by using a `<nav>` element or, if using a more generic element such as a `<div>`, add a role="navigation" to every navbar to explicitly identify it as a landmark region for users of assistive technologies.
- Indicate the current item by using aria-current="page" for the current page or aria-current="true" for the current item in a set.

<br><br>

## Supported content

### Navbars come with built-in support for a handful of sub-components. Choose from the following as needed:

<br>

- `.navbar-brand` for your company, product, or project name.

- `.navbar-` for a full-height and lightweight navigation (including support for dropdowns).

- `.navbar-toggler` for use with our collapse plugin and other navigation toggling behaviors.

- Flex and spacing utilities for any form controls and actions.

- `.navbar-text` for adding vertically centered strings of text.

- `.collapse.navbar-collapse` for grouping and hiding navbar contents by a parent breakpoint.

- Add an optional `.navbar-scroll` to set a max-height and scroll expanded navbar content.

<br><br>

## Code :

### Simply copy the code and paste it in the `body` of your html file

```

<nav class="navbar navbar-expand-lg navbar-light bg-light">

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

<br><br>

## It will look like this :

<br><br>

## Some more tips:

<br>

### Brand

The .navbar-brand can be applied to most elements, but an anchor works best, as some elements might require utility classes or custom styles.

<br>

### Image

You can replace the text within the .navbar-brand with an `<img>`.

<br>

### Nav

Navbar navigation links build on our .nav options with their own modifier class and require the use of toggler classes for proper responsive styling. Navigation in navbars will also grow to occupy as much horizontal space as possible to keep your navbar contents securely aligned.

Add the `.active` class on `.nav-link` to indicate the current page.

Please note that you should also add the `aria-current` attribute on the active `.nav-link`.

<br> <br>

## Scrolling

Add `.navbar-nav-scroll` to a `.navbar-nav` (or other navbar sub-component) to enable vertical scrolling within the toggleable contents of a collapsed navbar.
By default, scrolling kicks in at `75vh` (or 75% of the viewport height), but you can override that with the local CSS custom property `--bs-navbar-height` or custom styles. At larger viewports when the navbar is expanded, content will appear as it does in a default navbar.

Please note that this behavior comes with a potential drawback of `overflow` when setting `overflow-y: auto` (required to scroll the content here), `overflow-x` is the equivalent of auto, which will crop some horizontal content.

<br><br>

## Responsive behaviors

Navbars can use `.navbar-toggler` , `.navbar-collapse`, and `.navbar-expand{-sm|-md|-lg|-xl|-xxl}` classes to determine when their content collapses behind a button. In combination with other utilities, you can easily choose when to show or hide particular elements.

For navbars that never collapse, add the `.navbar-expand` class on the navbar. For navbars that always collapse, don’t add any `.navbar-expand` class.

<br><br>

## Togglers

Navbar togglers are left-aligned by default, but should they follow a sibling element like a `.navbar-brand` , they’ll automatically be aligned to the far right. Reversing your markup will reverse the placement of the toggler.
