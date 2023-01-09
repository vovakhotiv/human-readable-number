module.exports = function toReadable (number) {
  let numUnits = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };

  let numTens = {
    0: '',
    1: 'ten',
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  };

  let numOneTens = {
    1: 'eleven',
    2: 'twelve',
    3: 'thirteen',
    4: 'fourteen',
    5: 'fifteen',
    6: 'sixteen',
    7: 'seventeen',
    8: 'eighteen',
    9: 'nineteen',
  };

  let arr = String(number).split('');
  console.log(arr);

  let result = '';

  for (let i = 0; i < arr.length; i++) {

    if (arr.length == 3) {
      if (i == 0 && arr[1] != 0) {
        result += numUnits[arr[0]] + ' hundred ';
      } else if (i == 0 && arr[1] == 0) {
        result += numUnits[arr[0]] + ' hundred';
      }
      if (i == 1 && arr[1] != 1 && arr[2] != 0) {
        result += numTens[arr[1]] + ' ';
      } else if (i == 1 && arr[2] == 0) {
        result += numTens[arr[1]]; break;
      } else if (i == 1 && arr[1] == 1) {
        result += '';
      } else if (i == 1 && arr[1] == 0) {
        result += '';
      }
      if (i == 2 && arr[1] != 1 && arr[2] != 0) {
        result += numUnits[arr[2]];
      } else if (i == 2 && arr[1] == 1) {
        result += numOneTens[arr[2]];
      } else if (i == 2 && arr[1] == 0) {
        result += numUnits[arr[2]];
      }
    }

    if (arr.length == 2) {
      if (i == 0 && arr[0] != 1 && arr[1] != 0) {
        result += numTens[arr[0]] + ' ';
      } else if (i == 0 && arr[1] == 0) {
        result += numTens[arr[0]]; break;
      } else if (i == 0 && arr[0] == 1) {
        result += '';
      }
      if (i == 1 && arr[0] != 1 && arr[1] != 0) {
        result += numUnits[arr[1]];
      } else if (i == 1 && arr[0] == 1) {
        result += numOneTens[arr[1]];
      }
    }

    if (arr.length == 1) {
      if (i == 0 && arr[0] != 0) {
        result += numUnits[arr[0]];
      } else if (i == 0 && arr[0] == 0) {
        result += 'zero';
      }
    }

  }
  return result;
}