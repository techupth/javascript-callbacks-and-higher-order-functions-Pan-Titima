//Exercise #2: At Least Five Function

function atLeastFive(array, callback) {
  // Start coding here
  return  callback(array) >= 5 ? true : false; 
}


const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here
function callback(array){
  let overSeventyCount = 0;
  for(let i = 0; i < array.length; i++){
      if(array[i] > 70){
        overSeventyCount++;
      }
  }
  return overSeventyCount;
}

let scoreRoom1Result = atLeastFive(studentScoresRoom1, callback);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, callback);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, callback);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);