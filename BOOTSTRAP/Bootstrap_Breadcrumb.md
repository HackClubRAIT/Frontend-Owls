# BreadCrumb 
Breadcrumb is a web-based information level displayed to blog.They Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.

![Carousel Image](https://www.jquery-az.com/wp-content/uploads/2018/01/21-1-Bootstrap-4-breadcrumb-simple.png)
## Basic Example
Here an ordered list with linked list items have been used to create a minimally styled breadcrumb.
```` html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Electronics Home</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Electronics Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Smart Phones</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">ELectronics Home</a></li>
    <li class="breadcrumb-item"><a href="#">Smart Phones</a></li>
    <li class="breadcrumb-item active" aria-current="page">Brand Name Product Page</li>
  </ol>
</nav>
````
![image](https://s3.ap-south-1.amazonaws.com/s3.studytonight.com/tutorials/uploads/pictures/1621499257-101156.png)
## Dividers
Dividers are automatically added in CSS through ::before and content. They can be changed by modifying a local CSS custom property --bs-breadcrumb-divider.
```` HTML
<nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Content</li>
       <li class="breadcrumb-item active" aria-current="page">users</li>
  </ol>
</nav>
````
**Note:** When modifying via SASS use
```
$breadcrumb-divider: quote(">");
```
## BreadCrumb in header
If there is not enough space in navbar, consider placing breadcrumbs in a composition like this below.
![](https://cdn.dribbble.com/users/153154/screenshots/3864944/circle-breadcrumb-800x600.png)
_For more info:_
https://getbootstrap.com/docs/5.2/components/breadcrumb/
## Accessibility
Since breadcrumbs provide a navigation, it’s a good idea to add a meaningful label such as aria-label="breadcrumb" to describe the type of navigation provided in the <nav> element, as well as applying an aria-current="page" to the last item of the set to indicate that it represents the current page.
# CSS
## Variables
Breadcrumbs now use local CSS variables on .breadcrumb for enhanced real-time customization.
```
  --#{$prefix}breadcrumb-padding-x: #{$breadcrumb-padding-x};
  --#{$prefix}breadcrumb-padding-y: #{$breadcrumb-padding-y};
  --#{$prefix}breadcrumb-margin-bottom: #{$breadcrumb-margin-bottom};
  @include rfs($breadcrumb-font-size, --#{$prefix}breadcrumb-font-size);
  --#{$prefix}breadcrumb-bg: #{$breadcrumb-bg};
  --#{$prefix}breadcrumb-border-radius: #{$breadcrumb-border-radius};
  --#{$prefix}breadcrumb-divider-color: #{$breadcrumb-divider-color};
  --#{$prefix}breadcrumb-item-padding-x: #{$breadcrumb-item-padding-x};
  --#{$prefix}breadcrumb-item-active-color: #{$breadcrumb-active-color};
  ```
  ## SASS Variables
  ```
  $breadcrumb-font-size:              null;
$breadcrumb-padding-y:              0;
$breadcrumb-padding-x:              0;
$breadcrumb-item-padding-x:         .5rem;
$breadcrumb-margin-bottom:          1rem;
$breadcrumb-bg:                     null;
$breadcrumb-divider-color:          $gray-600;
$breadcrumb-active-color:           $gray-600;
$breadcrumb-divider:                quote("/");
$breadcrumb-divider-flipped:        $breadcrumb-divider;
$breadcrumb-border-radius:          null;
```

---
## Conclusion
This is the documentation for you to get started with bootstrap  breadcrumb. 
<br>
Resources from where examples and codes are taken and for detailed study of bootstrap breadcrumb:
1. [BootsrapDocs](https://getbootstrap.com/docs/5.2/components/breadcrumb/)<br>
2. [mdbootstrap](https://mdbootstrap.com/docs/standard/navigation/breadcrumb/)
---
---
Don't forget to give a ⭐ to [Frontend-owls](https://github.com/HackClubRAIT/Frontend-Owls) and keep contributing.
<br>
Happy Coding!
---
