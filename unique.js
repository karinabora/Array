var number_list = ["a","a","b","c"]
uniques=[]
duplicates=[]
for(var i of number_list){
  if(!uniques.includes(i)){
      uniques.push(i)
  }
}
 
for(var j of uniques){
  count=0
  for(var k of number_list){
      if (j === k){
          count+=1
      }
  }
 if(count <2){
   duplicates.push(j);
 };
}
 
console.log(duplicates); 