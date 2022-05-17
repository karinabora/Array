const array1 = [[0, 1], [2, 3], [4, 5]];

const result = array1.reduceRight((a,b) => a.concat(b));

console.log(result);

