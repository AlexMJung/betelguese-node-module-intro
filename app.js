console.log('module intro');
var kittens = require('./kitties.js');

//log the array of kittens
console.log(kittens.Greeting)

//log 

for (var i = 0; i < kittens.kittens.length; i++) {
console.log(kittens.kittens[i].name + " fur color is " + kittens.kittens[i].color);
};