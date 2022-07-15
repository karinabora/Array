char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
a=[]
uniques=[]
for(var i of char_list){
   if(!uniques.includes(i)){
       uniques.push(i)
   }
}
console.log(uniques);
