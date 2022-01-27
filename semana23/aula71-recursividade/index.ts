//1.
//a)
// const printNumbers = (n: number) => {
//     if (n >= 0) {
//       printNumbers(n - 1)
//       console.log(n)
//     }
//   };
// 
//  printNumbers(6)

//b)  
// const printNumbers = (n: number) => {
//     if (n >= 0) {
//       console.log(n)
//       printNumbers(n - 1)
      
//     }
//   };

//   printNumbers(6)

//2
// export const calculateSumTo = (n: number, acc: number = 0): number => {
//   if (n === 0) {
//     return acc;
//   }
//   return calculateSumTo(n - 1, acc + n);
// };

//3
// export const calculateSumTo = (n: number): number => {
//   var sum = 0
// 	for (var i = 0 ; i <= n ; i++) {
//         sum += i;
//   }
// 	return sum;
// };