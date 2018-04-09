# Advanced JS drills

Practicing hoisting
* test the effects of hoisting by entering the following in the exact order.
   name = "George Nguyen"
   var name;
   console.log(name);

* because of hoisting the order is actually reorganized so that the var declaration is read first.
* When the 'var' command is replaced with 'let' the code will return an ReferenceError. This is because 'let' will not be hoisted to the top like 'var' therefore the document does not know what the name variable is.
* When the 'setName' function is called before the function is defined it will still work. This is because the functions will be hoisted to the top.
* Your name will still be displayed before the function name. this is because the function was called after your name. the name var is also redefined within the function within it's own 'scope'.
* We further tested the hoisting of functions by adding in 'console.log's that would test the break point of several areas.

Practicing scope
* 'favFruit' was logged because the variable name exist inside the global scope.
* when 'let favFruit' was moved inside of the printFruit function it was no longer in the global scope and therefore no longer visable to the printFavFruit function.
* When the printFavFruit function was moved inside of the frintFruit function it regained the scope where favFruit was defined. calling the printFavFruit function can only be done inside of the print fruit function.
* creating a let leastFav outside of the function and calling for the console.log inside of the function will return 'undefined' since leastFav is outside of the scope.
* calling the hello() function before the function is defined will still work.
* calling a function before a let defined function will not work since once hoisted the function will not be moved (due to 'let'). the function will have to be called after the 'let' declaration.