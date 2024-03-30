// Exercise #1: For Each Function

function forEach(array, callback) {
  // Start coding here
  for(let i = 0; i < array.length; i ++){
      newEmployeeSalaries.push(callback(array[i], 5000));
  }

}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here
function callback(num, plus){
    return num + plus;
}

forEach(employeeSalaries, callback);
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
