const moment = require('./node_modules/moment');
// console.log(moment);

const chalk = require('./node_modules/chalk');
// console.log(chalk.green('hello world'));

console.log("it is " + chalk.yellow(moment().format("dddd, MMMM Do YYYY, h:mm:ss a")));
console.log("it is the " + chalk.cyan(moment().format("DDD")) + " of the year");
console.log("It is the " + chalk.blue(moment().format("k")*3600) + chalk.blue(moment().format("m")*60)+chalk.blue(moment().format("ss")) + " second of the day");


if (moment(["YYYY"]).isLeapYear() === true){
  console.log("it " + chalk.blue("is") + "a leap year");
}
else {
  console.log("it " + chalk.red("is not ") + "a leap year");
}

if (moment(["LL"]).isDST() === true){
  console.log("it " + chalk.green("is") + " day light savings time");
}
else {
  console.log("it " + chalk.redBright("is not") + " day light savings time");
}
