# Bootstrap Flex

## What is a Flexbox?

Flexbox is a layout model in CSS 3, used to align elements and distribute space between them. The **flex** stands for flexible and refers to the responsive web designs a flexbox is capable of creating. 

## Display Utilities

Flex behaviour of a container can be enabled by the use of different **display** utilities, the first and foremost being **d-flex** which turns the direct child elements of the container into flex items.

There also exists responsive variations of display utilities, but before that, we'll dive into Bootstrap BreakPoints.

### Breakpoints

Bootstrap provides six default breakpoints to help build a responsive design system.

| Breakpoint | Class Infix | Dimension (px)|
|-|-|-|
| Extra Small | - | < 576|
| Small | sm | ≥ 576 |
| Medium | md | ≥ 768 |
| Large | lg | ≥ 992 |
| Extra Large | xl | ≥ 1200 |
| Extra Extra Large | xxl | ≥ 1400 |

### Responsive Variations

To control at which breakpoint a container starts acting like a flexbox, the responsive variations of *d-flex* can be used.

- **d-flex**
- d-sm-flex
- d-md-flex
- d-lg-flex
- d-xl-flex
- d-xxl-flex

Similarly, for an inline flexbox container, the following classes can be used:

- **d-inline-flex**
- d-sm-inline-flex
- d-md-inline-flex
- d-lg-inline-flex
- d-xl-inline-flex
- d-xxl-inline-flex

## Flex Direction

A flexbox has two axes, the main axis and the cross axis. These are important for being able to work with a flexbox. The direction in which the flex items are laid out is called the main axis while the axis perpendicular to the main axis is called the cross axis.

The main axis can be defined by using either of **flex-row** or **flex-column**, flex-direction although is set to row by default.

Using the class flex-row makes the horizontal axis the main axis while using flex-column makes the vertical axis the main axis. There exists responsive variations of flex-direction utilities for both reverse and non-reverse classes. 

*Note:* **flex-row-reverse** and **flex-column-reverse** behave the same as flex-row and flex-column respectively except that the start and end points are oppsosite to the content direction.

## Wrap

Bootstrap is capable of wrapping content onto next line or forcing into a single line as desired.

- Wrapping of flex items can be done by using **flex-wrap**.
- While choosing not to wrap is a browser default, it can explicitly be done using **flex-nowrap**
- To enable reverse wrapping, that is reverse the start and end positions of cross axis, **flex-wrap-reverse** can be used

Responsive variations exist for both reverse and non-reverse wrapping utilities.

## Alignment

To align flex-items on the main axis, **justify-content** utilities can be used.

- justify-content-start
- justify-content-end
- justify-content-center
- justify-content-between
- justify-content-evenly
- justify-content-around

To align flex-items on the cross-axis, **align-items** utilities can be used.

- align-items-start
- align-items-end
- align-items-center
- align-items-baseline
- align-items-stretch

To align a flex-item individually on the cross axis, **align-self** utilities can be used. You can choose all the options available for align-items.

Responsive variations exist for all justify-content as well as align-items utilities, including align-self.

## Auto-Margin

When the margin property of a flex-item is set to auto, its specified margin(s) takes the value of whatever space is available to it. This is usually done to horizontally align an item to the center.

```html
<div class="d-flex">
    <div>
        Flex-item
    </div>
    <div class="mx-auto">
        Centered Flex-item
    </div>
    <div>
        Flex-item
    </div>
</div>
```

- ms-auto (margin-start-auto)  
- me-auto (margin-end-auto)
- mx-auto
- my-auto
- m-auto

## Order

These utilities determine the order in which flex-items appear. It can take integer values from 0 to 5; the lower the value, the earlier it'll appear in its flex-container.

- **order-0**
- order-1
- order-2
- order-3
- order-4
- order-5

Order utilities also include **order-first** and **order-last**, used to override the other utilites and prioritze certain flex-items by setting their order to -1 and 6 respectively.
