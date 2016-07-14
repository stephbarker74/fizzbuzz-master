for (var x = 1; x <= 100; x++) {  
  if ( x % 3 == 0 && x % 5 == 0 ) {
    console.log ("FizzBuzz");
    document.write ('FizzBuzz');
  }
  else if ( x % 3 == 0 ) {
    console.log ("Fizz");
    document.write ('Fizz');
  }
  else if ( x % 5 == 0 ) {
    console.log ("Buzz");
    document.write ('Buzz');
  }
  else {
    console.log (x);
    document.write (x);
  }
  document.write('<br/>');
 }