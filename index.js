// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

  function superbowlWin (record) {
    let outcome = record.find( record => record.result === 'W');
    if (outcome) {
  return outcome.year
} else {
  return undefined
}
}

  /*function win(input){
    return input.result === `W`
    //return input.year
  }

  function superbowlWin (record){
      let outcome = record.find(win).year
      if (outcome) {
      return outcome
      } else {return undefined}
  }*/

  /*superbowlWin()

  function sbWin(){

  }

  sbWin record.map.result*/
