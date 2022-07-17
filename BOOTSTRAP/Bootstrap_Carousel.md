# Carousel
In order to understand the meaning of *carousel* in web development we have to first understand it's meaning in real world. Carousel in fairs which is also known as merry-go-round in some countries is a spinning ride. In airport, it's a conveyor system from where the arriving passengers collect their luggage.
## Carousel meaning for websites and applications
Carousel is basically a collection or flimstrip of images that move in a smooth manner around a central axis.They are also called Carousel sliders.
There is a huge variety of carousel sliders one can choose for their website or app,but their purpose is the same,i.e., to showcase a number of images without having to click from one to another.
![Carousel Image](https://images.wondershare.com/mockitt/tips/carousel-01.jpg)
## How does carousel works
Carousel is built with css 3-D transformations and a bit of javascript. It works easily with text,images etc. and includes previous and next control.<br>
```
Note:In one of the slides,.active class should be added,otherwise the slides will not be visible.
```
## Example 1 Slides only
``` html
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
</div>
```
Code Source:https://getbootstrap.com/docs/5.2/components/carousel/#example
## Example 2 Slides with Control
``` html
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner" role="listbox">
    <div class="carousel-item active">
      <img class="d-block w-100" src="#" src="/placeholder/pictures/image.svg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="#" src="/placeholder/pictures/image.svg" alt="Second slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
```
## The above examples explained:
 1. .carousel ---	Creates a carousel
 2. .carousel-indicators ---	Adds indicators for the carousel. These are the little dots at the bottom of each slide 
 3. .carousel-inner---	Adds slides to the carousel
 4. .carousel-item---	Specifies the content of each slide
 5. .carousel-control-prev---	Adds a left (previous) button to the carousel, which allows the user to go back between the slides
6. .carousel-control-next---	Adds a right (next) button to the carousel, which allows the user to go forward between the slides
7. .carousel-control-prev-icon---	Used together with .carousel-control-prev to create a "previous" button
8. .carousel-control-next-icon---	Used together with .carousel-control-next to create a "next" button
9. .slide---	Adds a CSS transition and animation effect when sliding from one item to the next. Remove this class if you do not want this effect

_source:_ https://www.w3schools.com/bootstrap5/bootstrap_carousel.php

There exists many other ways that you can create carousel.
For other examples check out: https://getbootstrap.com/docs/5.2/components/carousel/#example
 ## Dark variant
 For darker controls,indicators and captions, add .carousel-dark to .carousel.
```html
 
     <div id="carouselExample" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
            <li data-bs-target="#carouselExample" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#carouselExample" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExample" data-bs-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://via.placeholder.com/800x450" class="d-block w-100 bg-secondary" style="height:250px;" alt="photo 1">
                <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="https://via.placeholder.com/800x450" class="d-block w-100 bg-secondary" style="height:250px;" alt="photo 2">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="https://via.placeholder.com/800x450" class="d-block w-100 bg-secondary" style="height:250px;" alt="photo 3">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Thirs slide label</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </a>
    </div>
    

```
## Sass
### Variables
```
$carousel-control-color:             $white;
$carousel-control-width:             15%;
$carousel-control-opacity:           .5;
$carousel-control-hover-opacity:     .9;
$carousel-control-transition:        opacity .15s ease;

$carousel-indicator-width:           30px;
$carousel-indicator-height:          3px;
$carousel-indicator-hit-area-height: 10px;
$carousel-indicator-spacer:          3px;
$carousel-indicator-opacity:         .5;
$carousel-indicator-active-bg:       $white;
$carousel-indicator-active-opacity:  1;
$carousel-indicator-transition:      opacity .6s ease;

$carousel-caption-width:             70%;
$carousel-caption-color:             $white;
$carousel-caption-padding-y:         1.25rem;
$carousel-caption-spacer:            1.25rem;

$carousel-control-icon-width:        2rem;

$carousel-control-prev-icon-bg:      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$carousel-control-color}'><path d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/></svg>");
$carousel-control-next-icon-bg:      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$carousel-control-color}'><path d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/></svg>");

$carousel-transition-duration:       .6s;
$carousel-transition:                transform $carousel-transition-duration ease-in-out; // Define transform transition first if using multiple transitions (e.g., `transform 2s ease, opacity .5s ease-out`)

$carousel-dark-indicator-active-bg:  $black;
$carousel-dark-caption-color:        $black;
$carousel-dark-control-icon-filter:  invert(1) grayscale(100);
```
---
## Conclusion
This is a short documentation for you to get started with bootstrap carousel. 
<br>
Resources from where examples and codes are taken and for detailed study of bootstrap carousel:
[BootsrapDocs](https://getbootstrap.com/docs/5.2/components/carousel/)<br>
---
---
Don't forget to give a ⭐ to [Frontend-owls](https://github.com/HackClubRAIT/Frontend-Owls) and keep contributing.
<br>
Happy Coding!
---

     
     
    


  
  


