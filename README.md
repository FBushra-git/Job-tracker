## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans:
getElementById() :  

It is used to select one specific element using its unique id.  

getElementsByClassName() :    

It selects multiple elements that share the same class name.  

querySelector():    

It selects the first element that matches a CSS selector.  

querySelectorAll():    

It selects all elements that match a CSS selector.   
 
All of them are used to select elements from the DOM,but they are different in fkexibility and how many elements they return.  


Main Differences:    

1.getElementById() and querySelector() returns only single element. getElementsByClassName() and querySelectorAll() returns a collection or group of elements.    

2.querySelector() and querySelectorAll() are more flexible because they allows to use id,class,tag selector,attriute selector etc. On the other hand getElementById() only works with id and getElementsByClassName() works with class name.

## 2. How do you create and insert a new element into the DOM?

ans:  

To create and insert a new element into the DOM, we follow a simple process.  

First, we create a new HTMl element using JAVASCRIPT.Then we add content,text or attributes to that element.Finally,we attach or insert that element into an existing parent element in the webpage.  

So,the steps are:  

1.Create the element.  
2.add content or properties.  
3.insert it into the DOM.  

By following this process we can dynamically add new elements to a webpage instead of writing everything directly in HTML.

## 3. What is Event Bubbling? And how does it work?

ans:  
Event bubbling is a process where an event starts from the element that triggered it and then moves upward to its parent elements.  
Its like ,when a child element is clicked, the event also goes to its parent and higher level elements unless its stopped.

## 4. What is Event Delegation in JavaScript? Why is it useful?

ans:  
Event delegation is a technique in JAVASCRIPT where instead of adding event listeners to multiple child elements, we add a single event listener to their parent element.It works because of event bubbling ,the event moves from the child to the parent and the parent handles it.  
It is useful because it improves performance,reduces repeated code and works well for dynamically created elements.

## 5. What is the difference between preventDefault() and stopPropagation() methods?

ans:  
preventDefault() and stopPropagation() are used to control events, but they do different things   

preventDefault() :  
stops the browser's default behaviour. Like preventing form submission or link navigation  

stopPropagation() : stops the event from moving to parent elements during event bubbling.