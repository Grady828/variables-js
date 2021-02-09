function main() 
{

  const numberOfCupsOfCoffee = 0;
  const fullName = "Mike Morris";
  console.log (`I am ${fullName}, I drink ${numberOfCupsOfCoffee} cups of coffee a day.`);

  const aboutMe ={
    myFavoriteMovies: ['Jaws', 'One', 'The Thing'],
    fullName: 'Mike Morris',
    luckyNumber: 9
  
  }
  const userName = prompt("Please enter your name");
  console.log (`Hi ${userName} Welcome to my program`);

  let firstOperand = parseFloat(prompt ("Give me number"));
  let secondOperand = parseFloat(prompt ("Give me another number"))
  
let sum = firstOperand + secondOperand
const difference = firstOperand - secondOperand
const product = firstOperand * secondOperand
const quotient = firstOperand / secondOperand
const remainder = secondOperand % firstOperand
console.log ( `If you add your numbers together you get ${sum}, if you subtract the second number from the first you get ${difference}, if you multiply them you get ${product}
, if you divide the first number by the second you get ${remainder} left over, if you divide the first number by the second you get ${quotient}. `);

let numbers = [92,	25,	12,	14,	48,
  13,	21,	6,	28,	32,
  64,	30,	42,	62,	29,
  32,	99,	10,	78,	58,
  50,	42,	74,	12,	15,
  3,	24,	71,	17,	43,
  95,	10,	70,	87,	93,
  94,	36,	91,	5,	81,
  9,	79,	57,	20,	55,
  28,	97,	60,	1,	14,
  43,	31,	37,	18,	68,
  9,	85,	80,	46,	64,
  55,	100,	3,	70,	48,
  71,	20,	25,	40,	9,
  61,	3,	44,	41,	29,
  100,	18,	73,	50,	12,
  7,	39,	88,	66,	89,
  34,	4,	79,	31,	36,
  65,	51,	63,	1,	11,
  88,	99,	7,	1,	36,]

  let smallest = numbers [0]
  let largest = numbers [0]
  sum = 0
  
  for (let index = 0; index < numbers.length; index++) {
    if (smallest > numbers[index]) {
      smallest = numbers[index]
    }
    if(largest < numbers[index]){
      largest = numbers[index]
    }
    sum += numbers[index]

  }

  const Statistics = {
smallest: smallest,
largest: largest,
sum: sum,
average: sum / numbers.length

  }
  console.log(Statistics)


          
        


}








     
  


  


document.addEventListener('DOMContentLoaded', main)
