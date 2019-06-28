# Javascript Foundations Assessments

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.
    Primitive: string, number, boolean
    complex: Array, Object
2. What's the difference between =, ==, and === in JavaScript?
    '=' will assign/reassign variables to values. '==' is a comparison operator that does not regard data type (cohersing data to become comparable). '===' is a strict comparison operator that does regard data type (meaning boolean === string will be false, regardless of their contents).
3. What is the difference between an array's index and length?
    While length accounts for the amount of elements within an array, the index will range from 0 up to, but not including, the length amount. [0, length)
4. What are the three parts of a for loop?
    1: Declaration of an iterator variable
    2: Declaration of range (usually via comparisons between iterator and ceiling)
    3: Declaration of step (usually up or down 1)
5. What is a function's declaration, argument, and call?
    'Declaration' is the naming and creating of a function. 'Argument' defines what the function will be expecting for its operation (ie how many variables it will take and their "name" within the function). 'Call' is when code elsewhere attempts to activate the function via its name and any arguments it requires.
6. What are the three main steps in saving work to github?
    git add
    git commit
    git push
7. What is the terminal command to move directories?
    cd
8. Do you have a suggestion for a Check In question?
    No, I'm not good at coming up with questions. Please don't break my brain.
9. What was your favorite topic this week?
    React, for getting me to take a better look into html and css. Seems efficient too.
10. What was your "A-ha!" moment this week?
    Figuring out how to effectively use .map() within the pig latin project to write efficient code (even if it took up too much time to figure out).
### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript
var text = 'outside'
function logIt(){
    console.log(text)
    var text = 'inside'
}

logIt()
```
    
2. What is JSON? How does it relate to javascript objects?
    
3. Describe a closure, what is it good for and how do you recognize one?
    