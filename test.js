require('babel-register');

const argv = require('yargs').demand(1).argv;
const day = ('0' + argv._[0]).substr(-2);

console.log(`Testing Day ${day}...`);
console.log('======================');

require(`./day${day}/tests`);
