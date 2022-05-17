// The entries() method returns an Array Iterator object with key/value pairs:
// entries() method does not change the original array.

const array1 = ['a', 'b', 'c'];
c=[]
const iterator1 = array1.entries();
for (const i of iterator1){
    // console.log(i);
    c.push(i)
} 
console.log(c);

