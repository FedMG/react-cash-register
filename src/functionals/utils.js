const getTotal = (elem) => {
  let total = 0;

  for (let [_, amount] of elem) {
    total += amount;
  }
  return total;
};

const swapToObject = (arr) => {
  const obj = {};
  for (let [key, value] of arr) {
    obj[key] = value;
  }
  return obj;
};

const swapToArray = (obj) => {
  const arr = [];
  for (let key in obj) {
    arr.push([key, obj[key]]);
  }
  return arr;
};

export { getTotal, swapToArray, swapToObject };
