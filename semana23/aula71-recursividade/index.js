//1.
//a)
// const printNumbers = (n: number) => {
//     if (n >= 0) {
//       printNumbers(n - 1);
//       console.log(n);
//     }
//   };
//b)  
var printNumbers = function (n) {
    if (n >= 0) {
        console.log(n);
        printNumbers(n - 1);
    }
};
printNumbers(6);
