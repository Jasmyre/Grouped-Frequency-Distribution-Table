// Given array
let arr = [
  8, 10, 18, 20, 20, 22, 23, 25,
  25, 26, 27, 28, 29, 29, 29, 30,
  30, 31, 31, 33, 35, 36, 36, 38,
  38, 39, 40, 43, 45, 45, 45, 48,
  49, 49, 49, 49, 50, 53, 53, 53,
  54, 54, 54, 55, 57, 57, 63, 65,
  67, 70
]
// let arr = [
//   99, 94, 105, 109, 106, 100, 102, 98,
//   102, 84, 93, 92, 109, 98, 106, 110,
//   77, 94, 91, 104, 103, 98, 118, 123,
//   97, 102, 100, 99, 107, 100, 103, 107
// ]
let sortedArr = arr.sort(function(a, b){return a-b});
console.log(sortedArr)

// Length of the given array
console.log(`\nLength of the given array: ${sortedArr.length}`);



let lowestVal = sortedArr[0];
let highestVal = sortedArr[sortedArr.length - 1];
console.log(`\nLowest value: ${lowestVal}\nhighest value: ${highestVal}`);

// Range(R) = highest value - lowest value
let range = highestVal - lowestVal;
console.log(`range: ${range}`);



// Number of class(K) = 1 + (3.322*log(N)) where N is the total number
let log = Math.log10(sortedArr.length);
let numberOfClass = 1 + (3.322 * (log.toFixed(3)));
// console.log(log.toFixed(3));
let roundedNumberOfClass = Math.ceil(numberOfClass);
console.log(`\nNumber of class: ${numberOfClass}`);
console.log(`rounded number of class: ${roundedNumberOfClass}`);



// Class width/class size/interval = R / K where R is range and K is number of class
let interval = range / numberOfClass;
let roundedInterval = Math.ceil(interval);
console.log(`\nInterval: ${interval}`);
console.log(`rounded interval: ${roundedInterval}`);



// Lower class limit = (A + 😎 * K where A is lowest value, B is class size/interval, and K is number of class
let lowerClassLimit = [];
lowerClassLimit.push(lowestVal);
for (let i = 0; i < roundedNumberOfClass - 1; i++) {
  lowerClassLimit.push(lowerClassLimit[lowerClassLimit.length - 1] + roundedInterval);
}
// console.log(`\nLower class limit: ${lowerClassLimit}`);
// console.log(lowerClassLimit);



// Upper class limit = lowerClassLimit[x] - 1
let upperClassLimit = [];
upperClassLimit.push(lowerClassLimit[1] - 1);
for (let i = 0; i < roundedNumberOfClass - 1; i++) {
  upperClassLimit.push(upperClassLimit[upperClassLimit.length - 1] + roundedInterval)
}
// console.log(`\nUpper class limit: ${upperClassLimit}`);
// console.log(upperClassLimit);



// Class limit
let classLimit = [];
classLimit.push([lowerClassLimit[0], upperClassLimit[0]]);
for (let i = 0; i < roundedNumberOfClass - 1; i++) {
  classLimit.push([lowerClassLimit[i + 1], upperClassLimit[i + 1]]);
}
// console.log(`\nClass limit: ${classLimit}`);
// console.log(classLimit);
// console.table(classLimit);



// Lower class bounderies
let lowerClassBounderies = [];
lowerClassBounderies.push(lowerClassLimit[0] - 0.5);
for (let i = 0; i < roundedNumberOfClass - 1; i++) {
  lowerClassBounderies.push(lowerClassLimit[i + 1] - 0.5);
}
// console.log(`\nLower class bounderies: ${lowerClassBounderies}`);
// console.log(lowerClassBounderies);



// Upper class bounderies
let upperClassBounderies = [];
upperClassBounderies.push(upperClassLimit[0] + 0.5);
for (let i = 0; i < roundedNumberOfClass - 1; i++) {
  upperClassBounderies.push(upperClassLimit[i + 1] + 0.5);
}
// console.log(`\nUpper class bounderies: ${upperClassBounderies}`);
// console.log(upperClassBounderies);



// Class bounderies
let classBounderies = [];
classBounderies.push([lowerClassBounderies[0], upperClassBounderies[0]]);
for (let i = 0; i < roundedNumberOfClass - 1; i++) {
  classBounderies.push([lowerClassBounderies[i + 1], upperClassBounderies[i + 1]]);
}
// console.log(`\nClass bounderies: ${classBounderies}`);
// console.log(classBounderies);
// console.table(classBounderies);



// Tally
let tally = [];
for (let j = 0; j < classLimit.length; j++) {
  let count = 0;
  arr.forEach(item => {
    if (item >= classLimit[j][0] && item <= classLimit[j][1]) {
      count++;
      // console.log(count + " " + item);
    }
  });
  tally.push(count);
}

function sumOfTallyFunction(tally) {
  let count = 0;
  for (let i = 0; i < tally.length; i++) {
    count = tally[i] + count;
  }
  return count;
}

let sumOfTally = sumOfTallyFunction(tally);
// console.log(`\nTally: ${tally}`);
// console.log(`sum of tally: ${sumOfTally}`);
// console.log(tally);
// console.table(tally);



// Mid point/Class mark     (lower limit + upper limit) / 2
let midPoint = [];
midPoint.push((lowerClassLimit[0] + upperClassLimit[0]) / 2);
for (let i = 0; i < roundedNumberOfClass - 1; i++) {
  midPoint.push(midPoint[midPoint.length - 1] + roundedInterval)
}
// console.log(`\nMid point: ${midPoint}`);
// console.log(midPoint);
// console.table(midPoint);



// Relative Frequency     F / N where f = frequency, and N = total number of frequencies
let relativeFrequency = [];
relativeFrequency.push(tally[0] / sumOfTally);
for (let i = 0; i < roundedNumberOfClass - 1; i++) {
  relativeFrequency.push(tally[i + 1] / sumOfTally);
}
// console.log(`\nRelative Frequency: ${relativeFrequency}`);
// console.log(relativeFrequency);
// console.table(relativeFrequency);



// Percent     R * 100 where R = relative frequency
let percent = [];
percent.push((tally[0] / sumOfTally) * 100 + "%");
for (let i = 0; i < roundedNumberOfClass - 1; i++) {
  let tempPercent = (tally[i + 1] / sumOfTally) * 100;
  percent.push(tempPercent + "%");
}
0   
// console.log(`\nPercent: ${percent}`);
// console.log(percent);
// console.table(percent);



// Cumulative frequency
let cumulativeFrequency = [];
cumulativeFrequency.push(tally[0]);
for (let i = 0; i < roundedNumberOfClass - 1; i++) {
  cumulativeFrequency.push(cumulativeFrequency[cumulativeFrequency.length - 1] + tally[i + 1] );
}
// console.log(`\nCumulative frequency: ${cumulativeFrequency}`);
// console.log(cumulativeFrequency);
// console.table(cumulativeFrequency);




// Table
console.log("\nTable:");
console.table({
  "Class limit(CL)"          : classLimit,
  "Class bounderies(CB)"     : classBounderies,
  "Mid point(X)"             : midPoint,
  "Tally / Frequency"        : tally,
  "Relative Frequency(RF)"   : relativeFrequency,
  "Percent(%)"               : percent,
  "Cumulative Frequency(CF)" : cumulativeFrequency
});