# CSS Selector CheatSheet

Here i've written in brief and as clearly as possible about all CSS selectors and combinators to help all those frontend enthusiasts out there! Dont forget to try them out too because practise is very important.

# Core Selectors

Selectors in CSS are used to select the appropriate HTML element you want to style.
Several CSS selectors exist for versatility in selection.

## Class Selector

Eg: .outer

Selects all elements which have the given class. (Outer class in our example)

## ID Selector

Eg: #name

Selects the HTML element which has the given id. (name in our example case)
(Quick Fact: ID is unique in whole document unlike classes)

## Element/Type Selector

Eg: h1
Directly select all the specified HTML element on the document.

## Universal Selector (\*)

Selector: \*

Universal Selector! Selects Everything!!

## Attribute Selector

Eg: img[href]

Selects the given attribute of the given tag from DOM.
(Quick Tip: You can even specify the attribute value to select a particular element.

For Eg: a[href="`https://example.com`"]
This selects all anchor tags which have the given href!)

## Pseudo Class Selector

Eg: button:hover

Pseudo classes are special keywords which specify a special state of an element. Like hover state on button, focus state on input etc. (Our example targets the hover state of all buttons on the DOM).
<br/>
Check [this](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) to know more about all types of pseudo classes!

## Pseudo Element Selector

Eg: p::first-letter

Pseudo element selector are those which let you target a _specific_ part of an element.
(Given example targets the first letter of all paragraph tags present in our DOM)
<br/>
Check [this](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) to know more about all types of pseudo classes!

# Combinators

Combinators are used to specify relationship between two selectors.

## Descendant Combinator

Eg: h1 p

The descendant combinator targets all the second mentioned elements (p in our example) who are the descendant or in other words have the first mentioned element as a parent or ancestor.
<br/>
(Given example selects all p tags which have h1 as their parent or ancestor)

## Child Combinator

Eg: ul > li

This selects only those elements matched by the second selector that are the direct children of elements matched by the first.
<br/>
(Given example selects all li elements which are direct children of ul)

## Adjacent Sibling Combinator

Eg: h1 + p

This combinator separates two selectors and matches the second element only if it immediately follows the first element, and both are children of the same parent.
<br/>
(Example selects p tags if its followed by a h1 tag and both belongs to a same parent)

## General Sibling Combinator

Eh: h1 ~ p

This matches all iterations of the second element, that are following the first element (though not necessarily immediately), and are children of the same parent.
<br/>
(Our example selects all the p tags which are following h1 tag (can be multiple p tags) unlike the Adjacent sibling selector which selects only the first occurrence)

##

### Now Go On Try These Selectors Yourself And Gain Some Experience!

##
