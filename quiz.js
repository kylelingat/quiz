/* 


kyle lingat
12-7-16

*/


var myArray = ['one', 'two', 10, true];

console.log(myArray[2])


function checker(boolean) {
  if (boolean === true) {
    console.log(myArray[0] + myArray[1] + myArray[2] + ' is my sentence');
  }
  else {
    console.log('You Shall Not Pass!');
  }
}


checker(myArray[3]);


var Batman = {
  man : true,
  utilityBelt : ['grappling hook', 'smoke thing', 'perfume'],
  vehicle : 'batmobile',
  sidekick : 'robin'
};

function batmaaan (mancheck) {
  if (Batman[0] === true) {
    console.log(utilityBelt[0] + Batman[2] + Batman [3] + ' is my sentence');
  }
  else {
    console.log('No, Im the Bat');
  }
}

batmaaan(Batman[0])
