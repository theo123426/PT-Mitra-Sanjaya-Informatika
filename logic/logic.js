function bilanganBulat(num) {
  let result = num;
  for (let i = 0; i < num; i++) {
    if (i > 0) {
      let tempValue = result * (num - i);
      result = tempValue;
    }
  }
  return result;
}

console.log(bilanganBulat(6));

function checkHuruf(string) {
  let calculate = {};
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (calculate[string[i]] === undefined) {
      calculate[string[i]] = [string[i]];
    } else {
      calculate[string[i]].push(string[i]);
    }
  }
  for (let key in calculate) {
    calculate[key] = calculate[key].length;
    let temp = calculate;
  }
  let key = Object.keys(calculate);
  let max = calculate[key[0]];
  for (let j = 0; j < key.length; j++) {
    let value = calculate[key[j]];
    if (value > max) {
      max = value;
      result = key[j];
    }
  }
  if (result === "") {
    return key[0];
  } else {
    return result;
  }
}

console.log(checkHuruf("sasdasa"));
