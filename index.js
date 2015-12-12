require("babel-register");

const argv   = require('yargs').demand(1).argv;
const day    = ('0' + argv._[0]).substr(-2);

const solution = {one: '1', two: '2'};

console.log(`Running Day ${day}...`);
console.log('======================');
console.log('');
console.log(' Part one: ' + solution.one);
console.log(' Part two: ' + solution.two);
console.log('');
