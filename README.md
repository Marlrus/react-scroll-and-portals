# React Scroll usage
In order to have an easier way of handling scroll events in React, there is a library called **react-scroll**. I am studying based on two resources: [How to use React.JS - React Smooth Scroll](https://www.youtube.com/watch?v=7f0QXAgFtrE&t=188s) from J Olson Digital's YouTube channel and [How To Implement Smooth Scrolling in React](https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react) by James Quick. I copied the repo from the article which will be my starting point: `git clone https://github.com/do-community/React-With-Smooth-Scrolling.git`

## About the App
We will build a simple app to understand how react-scroll works. The starter template will have a _navbar_ along with 5 sections of content. The links in the navbar are just anchor tags which will be updated for smooth scrolling. The link we are using **is the starter project** the master branch holds the finished project. 

## Navbar & App Components
Inside src/Components we have the **Navbar Component** Which uses the default HTML nav tag. Inside we have a div that holds the _nav-content_ and inside of that we have a **ul** classed **nav-items** that has individual **li** that are class **nav-item**.  These nav-item list items correspond the each of the five different **Section Components**. Inside of each of this list items we have a component from react-scroll called **Link** which we can see is using 6 props: activeClass, to, spy, smooth, offset, duration. 

The App component has our Navbar at the top, and then it holds 5 sections which each have 4 props: title, subtitle, dark, id which are pretty self explanatory.

## React Scroll Basics
We import two things from react-scroll: **Link** and **animateScroll as scroll** which we will be using inside the Navbar Component. We already looked at the Link component, but we will go over what each prop means:
-  `activeClass` The class applied when the element is reached.
-  `to` The target to scroll to.
-  `spy` To make Link selected when scroll is at its target's position. 
-  `smooth` To animate the scrolling. 
-  `offset` To scroll additional pixels, like a padding of sorts.
-  `duration` The time of the scroll animation, can be a number or a function. 

The most important property is the **to** property, which tells the component which element to scroll to. We will be targeting our **Section** Components. It is important to note that **to uses id to target** therefore the string that is passed to to must match the id that is passed to the target Component or tag. 

## Styling Active Links
Using **activeClass** we pass a string that will be applied when a component is active. *A link is considered active if its to element is in view near the top of the page*. _This can be triggered by clicking on the link itself or scrolling down to the section_. This behavior can be confirmed by using the chrome dev tools and looking at the elements to see if the class changes. In the dev tools I checked the nav component and we can see that the list items get the active class once we scroll or click on an item in the navbar. We add the following CSS line to style the _active_ Component:
```CSS
.nav-item  >  .active {
  border-bottom: 1px  solid  #333;
}
```
This targets the li with the class name nav-item AND active and sets a border at the bottom of it. After saving it works correctly and as expected, which would be a nightmare to implement using JS. 

## Adding Additional Functions
react-scroll also offers some functions that can be called directly like **scrollToTop** or **scrollToBottom** as well as various events that can be handled. One common use is the logo in the navbar to use scrollToTop. We added a click handler to do this in our logo using the functions that we imported in `animateScroll as scroll`:
```javascript
scrollToTop  = () => {
  scroll.scrollToTop();
};
...
<img
  src={logo}
  className="nav-logo"
  alt="Logo"
  onClick={this.scrollToTop}
/>
```
Now when the logo is clicked, the page will automatically scroll to the top of the page. 

## My Conclusions
Using react-scroll is an excellent alternative to using vanilla JS's implementation of scroll which requires a lot of math. These are the basic functionalities that can be achieved with react-scroll. In my project I will attempt to use **Link** only to check if scrolling events can be achieved as we want them to happen. I see no reason why this would not work, and it will make creating changes in the future a lot easier. 