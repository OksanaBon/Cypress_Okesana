const originalArray = [1, 2, 3, 4, 5, 2, 6, 7];
const valueToRemove = 2; // Значення, яке потрібно видалити

const filteredArray = originalArray.filter(item => item !== valueToRemove);

console.log(filteredArray);
