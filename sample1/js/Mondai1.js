const array = [2, 4, 7, 5, 4, 3, 8];

const filteredArray = array.filter(function (x, i) {
  return array.indexOf(x) == i;
})

console.log(filteredArray);