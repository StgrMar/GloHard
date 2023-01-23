let num = 266219;
let splitting = ('' + num).split('').map(Number)
let multiply = splitting.reduce((a,b)=> a*b);
let step = (multiply ** 3).toString();
console.log(typeof (step))
console.log(step.substring(0,2))