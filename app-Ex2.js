function findIndex(element, num) {
    for (let i = 0; i < element.length; i++) {
      if (element[i] === num) {
        return element[i];
      }
    }
    return -1;
  }
  
  let Array = prompt("Enter Array");
  let value = Number(prompt("Enter Number:"));
  let ArrayNumber = Array.split(",").map(Number);
  console.log(findIndex(ArrayNumber, value));
  
