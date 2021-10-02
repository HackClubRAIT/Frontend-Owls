##CSS FLEXBOX 

*Flexbox is a one dimensional layout method for laying out items in rows or columns.
*CSS flexbox is a better way to align items into a container
*Flexbox=flexible+box

#️#Flexbox Elements
To start using the Flexbox model, you need to first define a flex container.
Example:
<div class="flex-container">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</div>

#️# Flex properties for flex conatiner 
To use flexbox 1st of all we have to initialize the display as a flex
display:flex;
#️flex properties for flex container
flex-direction: row; //default value of flex //flex-direction is row
flex-direction: column;
flex-direction: row-reverse;
flex-direction: column-reverse;

flex-wrap: wrap;
flex-wrap: wrap-reverse;

#️Shorthand of flex-diractioon and flex wrap
flex-flow: row-reves wrap;

#️To justify items vartically
  justify-content: center;To justify items vartically
  justify-content: space-between;
  justify-content: space-around;
  justify-content: space-evenly;

#️To align-items vertically
  align-items: center;//to align vertically
  align-items: flex-end;
  align-items: flex-start;
  align-items: stretch;

#️#Flex properties for flex conatiner 

If you want to place items according to order we can use this property. Higher the order later up it shows in the container
order: 2;
flex-grow: 2;// to make a particular item bigger in size with proportion to another
flex-shrink: 2;// to make a particular item shrink in size with proportion to another

flex-basis: 160px;
           * when flex-direction is set to row flex-basis: will control width
           
           *when flex-direction is set to column flex-basis: will control height
