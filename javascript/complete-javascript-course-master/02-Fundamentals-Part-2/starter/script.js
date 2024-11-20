// 'use strict';

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function(){
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function(){
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };


// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi);
// console.log(john.bmi);

const calcTip = function (bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52] 

const tips = []
const totals = []

for(let i = 0; i < bills.length ; i++ ){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]); 
}

console.log(bills, tips, totals)

const calcAvg = function(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum / arr.length;
}

console.log(calcAvg([2,3,7]))
console.log(calcAvg(totals))