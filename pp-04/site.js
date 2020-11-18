/*
  Step 1. Correct the variable scope so that the console.log()
  call outputs the correct value for x (5). You must still use
  `x` as the variable inside the function, however.
*/

x = 5;
function double(num) {
  var x = num * 2;
  return x;
}

double(6);
console.log('The value of x is', x, '-- it should be 5.');

/*
  Step 2. Rewrite the JavaScript `double()` function above so that
  it does not pollute the global namespace: that is, neither its
  variables nor the `double()` function itself can be accessed
  directly via the global `window` object, like `window.x`).
  Be sure to comment out the original `double()` function so you
  can accurately test your work.
  --with the function above enetering: window.x I got 5 now with what I have
  below when I enter window.x I get "Undefined"
  not sure if that is how you correctly not pollute the global namespace
  just what I saw in examples of "not polluting the global namespace in JavaScript"
*/

(
  function()
{
 var x = 5;
 function double(num) {
   var x = num * 2;
   return x;
  }

double(6);
console.log('The value of x is', x, '-- it should be 5.');
}
);

/*
  Step 3. Rewrite your corrected `double()` function from Step 2.
  so that non-number values passed into the function are handled
  in some reasonable way.
  -- if else statment if number is enter do this else do this and say thats a non-number
  keep running double and keep getting an error that it isnt defined
*/

(
  function()
{
 var x = 5;
 function double(num) {
   check = 0;
   while (check == 0) {
    if (typeof(num).equals("number") ){
      var x = num * 2;
      check = 1;
      return x;
    } else {
      return ('Input is not a number');
    }
  }
}

double(6);
console.log('The value of x is', x, '-- it should be 5.');
}
);
