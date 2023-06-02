const checkPermute = function(stringOne, stringTwo) {
    // if different lengths, return false
  if (stringOne.length !== stringTwo.length) {
    return false;
  } else {
    let ArrayOne = stringOne.split('').sort();
    let ArrayTwo = stringTwo.split('').sort();
    for (let i = 0; i < ArrayOne.length; i++){
      if (ArrayOne[i] !== ArrayTwo[i]) {
        return false;
      }
    }
    return true;
  }

    // else sort and compare
    // (doesnt matter how it's sorted, as long as it's sorted the same way)

  };


  console.log(checkPermute('aba', 'aab'))//true;
  console.log(checkPermute('aba', 'aaba'))//false;
  console.log(checkPermute('aba', 'aa'))//false;
