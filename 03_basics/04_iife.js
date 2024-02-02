//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. 
// usefull when u want to run a function to estb database connnection

function chai(){
    console.log(`DB Connected1`);
}
chai(); // semicolon is required to run 
//Avoid polluting the global namespace
/* Because our application could include many functions and global variables from different source files, it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.
*/

(function chai2() { //this is called named iffe , 
    console.log(`DB Connected2`);
})();
// so previously we used {} inside () to run object same logic is use here


((name) =>{
    console.log(`DB ${name} is Connected`);
})("Apoorv")// without function name r is called simple iffe