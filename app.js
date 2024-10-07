

// originally forgot to add the const at the beginning
// also had some trouble figuring out "= arr ="

const double = arr => arr.map((val) => val * 2)

//2nd challenge is a doozy

// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }
  //My answer:

  const squareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0)

  //I learned some stuff but it was challenging. I am still getting used to the "= numbers =" format. 
