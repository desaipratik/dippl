// var foo = function(a, b){
//   if (a > b) {
//     return a + b;
//   } else {
//     return a - b;
//   }
// };

// var bar = function(c, d){
//   return c * bar(d, 3);
// };

// var x = 1;
// var y = 2;
// var z = bar(foo(x, y), 3);

// console.log(z);

foo(
  function(h){
    return function (a){return h(g(a));};
  }(function(x){return x;})
);
